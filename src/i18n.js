import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import tr from './locales/tr.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: localStorage.getItem('language') || 'en',
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
