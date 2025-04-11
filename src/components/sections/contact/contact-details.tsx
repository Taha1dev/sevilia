import { Card, CardContent } from '@/components/ui/card';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactDetails() {
  const { t } = useTranslation();

  const cards = [
    {
      name: t('E-Mail Adresse'),
      value: 'info@bg.com',
      icon: <Mail className="text-main" />,
      onClick: () => (window.location.href = 'mailto:info@cordoba.com'),
    },
    {
      name: t('Telefonnummer'),
      value: '+49 50 60 905 000',
      icon: <Phone className="text-main" />,
      onClick: () => (window.location.href = 'tel:+495060905000'),
    },
    {
      name: t('Adresse'),
      value: 'Deutschland - Berlin',
      icon: <MapPin className="text-main" />,
      onClick: null,
    },
    {
      name: t('Rufen Sie uns jetzt an'),
      value: t('Haben Sie Fragen? Wir haben die Antwort.'),
      icon: <Heart className="text-main" />,
      onClick: null,
    },
  ];

  return (
    <main className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-variant mb-4">
          {t('Kontaktieren Sie uns')}
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          {t(
            'Kontaktieren Sie uns gerne! Senden Sie uns Ihre Fragen hier – wir hören Ihnen gerne zu.'
          )}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col cursor-pointer md:flex-row items-center justify-between gap-4 bg-white border border-border rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-24px)] transition-shadow shadow-none"
              onClick={card.onClick || undefined}
            >
              <CardContent className="flex items-center gap-4 flex-1 w-full md:w-auto">
                <div className="bg-[#e1eef8] text-main rounded-xl size-14 flex items-center justify-center">
                  <div className="size-6">{card.icon}</div>
                </div>
                <div className="text-start">
                  <h3 className="text-lg font-semibold text-variant">
                    {card.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
