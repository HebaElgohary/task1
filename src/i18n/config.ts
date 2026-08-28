import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationAr from "./ar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
        ar: {
        translation: translationAr,
      },
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;