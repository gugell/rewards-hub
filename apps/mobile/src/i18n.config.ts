import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nConfig } from "@common";

i18next.use(initReactI18next).init({
  resources: i18nConfig.resources,
  lng: i18nConfig.initialLanguage,
  fallbackLng: i18nConfig.fallbackLanguage,
  supportedLngs: i18nConfig.supportedLanguages,
});

export default i18next;