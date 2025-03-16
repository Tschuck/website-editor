import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deTranslations from "@/general/locales/de/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: "de",
  resources: {
    de: { translation: deTranslations },
  },
});

export { i18n };
