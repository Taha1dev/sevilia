import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { queryClient } from "@utils/react-query";
// import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { SelectedLanguageAtom } from './store/selectedLang';

function App() {
  const { i18n } = useTranslation();

  const setSelectedLanguage = useSetAtom(SelectedLanguageAtom);
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      setSelectedLanguage(savedLanguage);
      dayjs.locale(savedLanguage);
    } else {
      i18n.changeLanguage('ar');
      document.body.dir = 'rtl';
      localStorage.setItem('selectedLanguage', 'ar');
      setSelectedLanguage('ar');
      dayjs.locale('ar');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n]);
  return <RouterProvider router={router} />;
}

export default App;
