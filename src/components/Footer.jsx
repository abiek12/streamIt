import { Trans, useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer px-36 py-24 text-text-secondary flex flex-col gap-8">
      <div className="w-full">
        <p>
          <Trans
            i18nKey="footer.questions"
            components={{
              phone: <span className="underline cursor-pointer" />,
            }}
          />
        </p>
      </div>
      <div className="">
        <ul className="underline text-sm flex flex-col flex-wrap gap-3 h-36">
          <li className="cursor-pointer">{t("footer.links.faq")}</li>
          <li className="cursor-pointer">
            {t("footer.links.investorRelations")}
          </li>
          <li className="cursor-pointer">{t("footer.links.privacy")}</li>
          <li className="cursor-pointer">
            <a href="https://fast.com/">{t("footer.links.speedTest")}</a>
          </li>

          <li className="cursor-pointer">{t("footer.links.helpCenter")}</li>
          <li className="cursor-pointer">{t("footer.links.jobs")}</li>
          <li className="cursor-pointer">
            {t("footer.links.cookiePreferences")}
          </li>
          <li className="cursor-pointer">{t("footer.links.legalNotices")}</li>

          <li className="cursor-pointer">{t("footer.links.account")}</li>
          <li className="cursor-pointer">{t("footer.links.waysToWatch")}</li>
          <li className="cursor-pointer">
            {t("footer.links.corporateInformation")}
          </li>
          <li className="cursor-pointer">{t("footer.links.onlyOnNetflix")}</li>

          <li className="cursor-pointer">{t("footer.links.mediaCenter")}</li>
          <li className="cursor-pointer">{t("footer.links.termsOfUse")}</li>
          <li className="cursor-pointer">{t("footer.links.contactUs")}</li>
        </ul>
      </div>
      <div className="w-32">
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
      </div>
      <div className="text-sm">
        <h4>Netflix India</h4>
      </div>
      <div className="text-sm text-text-muted">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot
        </p>
      </div>
    </div>
  );
};

export default Footer;
