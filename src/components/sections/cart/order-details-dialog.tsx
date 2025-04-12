import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type Book = {
  title: string;
  author: string;
  price: number;
  img: string;
};

type OrderDetailsProps = {
  open: boolean;
  onClose: () => void;
};

const books: Book[] = [
  {
    title: 'Abenteuer in der Farbenwelt',
    author: 'محمد علي المصري',
    price: 299,
    img: '/images/b1.png',
  },
  {
    title: 'Abenteuer in der Farbenwelt',
    author: 'محمد علي المصري',
    price: 2599,
    img: '/images/b2.png',
  },
  {
    title: 'Abenteuer in der Farbenwelt',
    author: 'محمد علي المصري',
    price: 2599,
    img: '/images/b3.png',
  },
];

export default function OrderDetailsDialog({
  open,
  onClose,
}: OrderDetailsProps) {
  const { t } = useTranslation();

  const discount = 350;
  const shipping = 0;
  const tax = 61.99;
  const subtotal = books.reduce((acc, b) => acc + b.price, 0);
  const total = subtotal - discount + tax;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full lg:max-w-3xl lg:h-auto max-h-[90vh] overflow-y-auto p-4 sm:p-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="px-2 sm:px-4 pt-6 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <DialogTitle className="lg:text-2xl text-xl font-semibold text-variant">
              {t('Bestellnummer')}{' '}
              <span className="text-foreground">3354654654526</span>
            </DialogTitle>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t('Bestelldatum')}:</span>
              <span className="text-foreground font-medium">Feb 16, 2022</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-green-600 font-medium border-b border-border pb-4">
            <span>{t('Voraussichtliche Lieferung')}:</span>
            <span>May 16, 2022</span>
          </div>

          <div className="relative mt-6">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted" />
            <div className="flex justify-between text-center absolute w-full z-10 -top-2">
              {[
                {
                  label: t('Bestellt'),
                  date: 'الأربعاء، 16 فبراير',
                  color: 'green',
                },
                {
                  label: t('Versandt'),
                  date: 'الأربعاء، 20 فبراير',
                  color: 'yellow',
                },
                {
                  label: t('Geliefert'),
                  date: 'متوقع بحلول يوم الإثنين 26',
                  color: 'gray',
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center w-1/3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 mb-1 ${
                      step.color === 'green'
                        ? 'bg-green-500 border-green-500'
                        : step.color === 'yellow'
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-gray-300 border-gray-300'
                    }`}
                  />
                  <div
                    className={`text-xs font-medium ${
                      step.color === 'green'
                        ? 'text-green-700'
                        : step.color === 'yellow'
                        ? 'text-yellow-600'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {step.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogHeader>

        <div className="divide-y mt-4">
          {books.map((book, i) => (
            <div key={i} className="flex items-center py-4 gap-4">
              <img
                src={book.img}
                alt={book.title}
                width={60}
                height={90}
                className="rounded border object-cover"
              />
              <div className="flex-1">
                <div className="font-medium text-sm sm:text-base">
                  {book.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {book.author}
                </div>
              </div>
              <div className="text-right font-semibold text-sm sm:text-base">
                ${book.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 space-y-1 text-sm sm:text-base text-right">
          <div className="flex justify-between">
            <span>{t('Zwischensumme')}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>{t('Versand')}</span>
            <span>{shipping === 0 ? t('Kostenlos') : `$${shipping}`}</span>
          </div>
          <div className="flex justify-between">
            <span>{t('Rabatt')}</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>{t('Steuer')}</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base sm:text-lg border-t pt-2">
            <span>{t('Gesamtsumme')}</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-end mt-6">
          <Button onClick={onClose}>{t('Schließen')}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
