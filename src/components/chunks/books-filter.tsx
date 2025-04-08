import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { RefreshCcw, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useIsRtl from '@/hooks/useIsRtl';

export default function BookFilterSidebarToggle() {
  const [priceRange, setPriceRange] = useState([15, 500]);
  const { t } = useTranslation();
  const isRtl = useIsRtl();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center">
          <Filter className="w-4 h-4" />
          {t('Filter')}
        </Button>
      </SheetTrigger>

      <SheetContent
        side={!isRtl ? 'right' : 'left'}
        className="w-full max-w-md p-6 space-y-6 overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-main">
            {t('Ergebnisse filtern und sortieren')}
          </h2>
          <Button variant="outline" className="text-red-500 px-0 cursor-pointer">
            {t('Zurücksetzen')}
            <RefreshCcw className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div dir="rtl" className="space-y-2 w-full *:w-full *:text-variant">
          <label className="block text-sm font-medium">
            {t('Ergebnisse sortieren nach')}
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('Vom Neusten zum Ältesten')} />
            </SelectTrigger>
            <SelectContent className="text-start">
              <SelectItem value="latest">
                {t('Vom Neusten zum Ältesten')}
              </SelectItem>
              <SelectItem value="oldest">
                {t('Vom Ältesten zum Neusten')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-full *:w-full *:text-variant">
          <label className="block text-sm font-medium">
            {t('Buchklassifizierung')}
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('Druck + Elektronik')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="printed">{t('gedruckt')}</SelectItem>
              <SelectItem value="digital">{t('Elektronik')}</SelectItem>
              <SelectItem value="both">{t('gedruckt + Elektronik')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-full *:w-full *:text-variant">
          <label className="block text-sm font-medium">
            {t('Altersgruppe')}
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('Nicht spezifiziert')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('Nicht spezifiziert')}</SelectItem>
              <SelectItem value="kids">{t('Kinder')}</SelectItem>
              <SelectItem value="teens">{t('Teenager')}</SelectItem>
              <SelectItem value="adults">{t('Erwachsene')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-full *:w-full *:text-variant">
          <label className="block text-sm font-medium">
            {t('Seitenanzahl')}
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={t('1 - 100 Seiten')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">{t('1 - 100 Seiten')}</SelectItem>
              <SelectItem value="medium">{t('100-500 Seiten')}</SelectItem>
              <SelectItem value="long">{t('500 - 1000 Seiten')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 w-full *:w-full *:text-variant">
          <label className="block text-sm font-medium">{t('Buchpreis')}</label>
          <Slider
            min={1}
            max={500}
            step={1}
            defaultValue={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between text-sm text-muted-foreground px-1">
            <span>{priceRange[0]}€</span>
            <span>{priceRange[1]}€</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
