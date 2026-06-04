import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcomeMessage: "Hey Abhishek welcome to streamIt",
    },
  },
  hi: {
    translation: {
      welcomeMessage: "हे अभिषेक, स्ट्रीमइट में आपका स्वागत है।",
    },
  },
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "hi",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
