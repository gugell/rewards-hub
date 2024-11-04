import i18next from 'i18next';
import React, { createContext, ReactNode, useState } from 'react';
import i18n from './i18n';

export const i18nConfig = {
  supportedLanguages: ['en', 'de'],
  fallbackLanguage: 'en',
  initialLanguage: 'en',
  resources: i18n,
};

export type i18nConfigType = typeof i18nConfig;

interface ILocalizationProvider {
  locale: string;
  changeLanguage: (language: string) => void;
}
const changeLanguageUsingI18n = (language: string) => {
  i18next.changeLanguage(language);
};

const LocalizationContext = createContext<ILocalizationProvider>({
  locale: i18nConfig.initialLanguage,
  changeLanguage: changeLanguageUsingI18n,
});

interface LocalizationContextWrapperProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<
  LocalizationContextWrapperProps
> = ({ children }) => {
  const [locale, setLocale] = useState(i18nConfig.initialLanguage);

  const changeLanguage = (language: string) => {
    changeLanguageUsingI18n(language);
    setLocale(language);
  };

  return (
    <LocalizationContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};
