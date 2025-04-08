import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, FileText, ShoppingCart, StarIcon } from 'lucide-react';
import { BookMetaList } from '@/components/single-book/book-meta-list';
import { ReviewsList } from '@/components/single-book/book-reviews';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
type CardOption = {
  id: string;
  title: string;
  price: string;
  icon: React.ReactNode;
};

export default function BookDetailsPage() {
  const meta = [
    { label: 'الكاتب', value: 'علاء مصطفى الريامي' },
    { label: 'تاريخ النشر', value: '11/9/2024' },
    { label: 'اللغة', value: 'عربية' },
    { label: 'عدد الصفحات', value: '222 صفحة' },
  ];
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardOptions: CardOption[] = [
    {
      id: 'electronic',
      title: 'Elektronische Kopie',
      price: '15.25 $',
      icon: <FileText size={32} />,
    },
    {
      id: 'paper',
      title: 'Gedruckte Ausgabe',
      price: '20.25 $',
      icon: <Book size={32} />,
    },
  ];

  const handleCardClick = (id: string) => {
    setSelectedCard(id === selectedCard ? null : id);
  };
  const { t } = useTranslation();
  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="aspect-[3/4] relative w-full h-full max-w-md mx-auto md:mx-0">
          <img
            src="/images/b1.png"
            alt="Nightlights Book Cover"
            className="object-cover rounded-xl shadow-lg w-full h-full"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-start text-main">
              مغامرات في عالم الألوان
            </h1>

            <div className="flex items-center gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                />
              ))}
              <span className="text-sm text-muted-foreground mr-1">(5.0)</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-start leading-relaxed text-muted-foreground">
            "مغامرات في عالم الألوان" هو كتاب تفاعلي ممتع للأطفال، يساعدهم في
            رحلة اكتشاف الألوان من خلال قصص شيقة ورسومات ملونة. يُلهم الأطفال من
            خلال شخصيات مرحة مثل ألوان القوس قزح ويُعزز استخدامهم لها في
            تعبيراتهم.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {cardOptions.map((option) => (
              <Card
                key={option.id}
                className={`hover:shadow-md transition-shadow cursor-pointer ${
                  selectedCard === option.id ? 'border-2 border-orange' : ''
                }`}
                onClick={() => handleCardClick(option.id)}
              >
                <CardContent className="p-4 space-y-1 flex flex-col items-center justify-center gap-3">
                  {option.icon}
                  <div className="flex flex-col items-center justify-between text-variant gap-1">
                    <span className="text-2xl font-medium">
                      {t(option.title)}
                    </span>
                    <span className="text-orange-500 font-bold text-xl">
                      {option.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-2">
            <BookMetaList meta={meta} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Button className=" cursor-pointer w-full bg-orange hover:shadow-lg hover:bg-orange transition-shadow text-white rounded-lg py-6 text-lg">
              {t('In den Warenkorb legen')}
              <ShoppingCart size={26} />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-right">
            {t('Bewertungen und Ratings')}
          </h2>
        </div>
        <ReviewsList />
      </div>
    </div>
  );
}
