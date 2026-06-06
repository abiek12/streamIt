import { CaretDownIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { ProfileDropDown } from "./ProfileDropDown";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../stores/userSlice";
import { auth } from "../utils/firebase";
import { Tooltip } from "react-tooltip";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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

        <LanguageSelector />

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
              {value ? t("header.homeButton") : t("header.signInButton")}
            </button>
          </div>
        )}

        {isProfileDropDown && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Header;
