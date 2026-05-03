const Header = ({ value, toggle }) => {
  return (
    <div className="header absolute z-20 top-0 py-2 px-36 w-full flex justify-between items-center">
      <div className="left-section">
        <div className="logo w-48 h-auto cursor-pointer">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="right-section flex justify-between items-center gap-2">
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
                fill-rule="evenodd"
                d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
                clip-rule="evenodd"
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
        <div className="">
          <button
            onClick={toggle}
            className="text-text-primary bg-primary px-4 py-1 rounded-sm cursor-pointer"
          >
            {value ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
