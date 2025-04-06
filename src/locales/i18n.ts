import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ar, de } from './translations';

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    ar: { translation: ar },
  },
  lng: 'ar',
  // fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});
