const Header = () => {
  return (
    <div className="header absolute top-0 py-4 px-40 w-full flex justify-between items-center">
      <div className="left-section">
        <div className="logo w-48 h-auto">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="right-section flex justify-between items-center">
        <div className="lang">
          <select name="lang" id="">
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
        </div>
        <div className="">
          <button className="text-text-primary bg-primary px-4 py-2 rounded-sm">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
