import { CaretDownIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { ProfileDropDown } from "./ProfileDropDown";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../stores/userSlice";
import { auth } from "../utils/firebase";
import { Tooltip } from "react-tooltip";

const Header = ({
  value,
  toggle,
  authState,
  gptSearchValue,
  gptSearchToggle,
}) => {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const profileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleProfileDropDown = () => {
    setIsProfileDropDown((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // if clicked outside
      // if (profileRef.current && !profileRef.current.contains(event.target)) {
      //   setIsProfileDropDown(false);
      // }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header absolute z-20 top-0 py-8 px-36 w-full flex justify-between">
      <div className="left-section">
        <div className="logo w-40 h-auto cursor-pointer">
          <img
            className=""
            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
            alt="Logo"
          />
        </div>
      </div>
      <div className="relative right-section flex justify-between items-center gap-3">
        {authState && !gptSearchValue && (
          <div className="relative w-fit">
            {/* Glow container */}
            <div className="relative overflow-hidden p-0.5">
              {/* Rotating glow */}
              <div
                className="absolute inset-[-1000%] animate-spin-slow pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b0000, #E50914, #5c0000, #3b0000)",
                }}
              />

              {/* Button */}
              <button
                data-tooltip-id="ai-search-btn"
                data-tooltip-content="Search your queries with AI powered search"
                onClick={gptSearchToggle}
                className="relative z-10 bg-black px-6 py-1.5 text-white text-sm transition-all duration-300 cursor-pointer"
              >
                Search
              </button>
            </div>

            <Tooltip id="ai-search-btn" />
          </div>
        )}

        {authState && gptSearchValue && (
          <button
            onClick={gptSearchToggle}
            className="relative z-10 bg-black px-6 py-1.5 text-white text-sm transition-all duration-300 cursor-pointer border border-solid border-white"
          >
            Home
          </button>
        )}

        <div className="lang bg-surface text-text-primary py-1 px-2 flex justify-between items-center gap-2 border border-solid border-text-muted cursor-pointer">
          <div className="">
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="LanguagesSmall"
              data-icon-id=":R8pbaml6lalalalb96:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="">
            <select className="" name="LanguageSelect" id="">
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>
        </div>

        {authState ? (
          <div
            ref={profileRef}
            onClick={toggleProfileDropDown}
            className="flex justify-center items-center gap-2 cursor-pointer"
          >
            <button className="w-9 h-9 cursor-pointer">
              <img
                className="w-full h-full"
                src="/userProfile.jpg"
                alt="User profile icon"
              />
            </button>
            <CaretDownIcon size={15} color="#ffffff" weight="fill" />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button
              onClick={toggle}
              className="text-text-primary bg-primary px-4 py-1 rounded-sm cursor-pointer"
            >
              {value ? "Home" : "Sign In"}
            </button>
          </div>
        )}

        {isProfileDropDown && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Header;
