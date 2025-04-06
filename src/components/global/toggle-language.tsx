import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GlobeIcon, ChevronDown, Languages } from 'lucide-react';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { SelectedLanguageAtom } from '../../store/selectedLang';

export default function ToggleLanguage() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useAtom(SelectedLanguageAtom);
  const changeLanguage = useCallback(
    (lng: string) => {
      if (lng === 'ar') {
        document.body.dir = 'rtl';
      } else {
        document.body.dir = 'ltr';
      }
      localStorage.setItem('selectedLanguage', lng);
      setSelectedLanguage(lng);
      i18n.changeLanguage(lng);
      dayjs.locale(lng);
    },
    [i18n, setSelectedLanguage]
  );

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center space-x-2 gap-2 p-3 border border-main rounded-full text-main hover:bg-main/10 transition-colors duration-200 cursor-pointer">
            <GlobeIcon className="size-4" />
            <span className="font-medium">
              {selectedLanguage.toUpperCase()}
            </span>
            <ChevronDown className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-white border border-main rounded-lg shadow-lg *:cursor-pointer">
          <DropdownMenuItem
            onClick={() => changeLanguage('ar')}
            className="flex items-center gap-4 w-full px-4 py-3 text-sm text-main hover:bg-main/10 transition-colors duration-200"
          >
            <Languages className="size-4 mr-2" />
            العربية
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLanguage('de')}
            className="flex items-center gap-4 w-full px-4 py-3 text-sm text-main hover:bg-main/10 transition-colors duration-200"
          >
            <Languages className="size-4 mr-2" />
            Deutsch
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
