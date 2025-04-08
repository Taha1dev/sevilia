import NumberedCard from '@/components/chunks/number-card';
import SectionHeader from '@/components/chunks/section-header';
import { useTranslation } from 'react-i18next';

export default function WhyUs() {
  const cardData = [
    {
      id: 1,
      title: 'Eine vielfältige Auswahl an Büchern',
      description:
        'Wir bieten eine große Auswahl an Büchern für jeden Geschmack, darunter klassische Literatur, moderne Bücher und seltene Ausgaben, wobei die Bücher in mehr als einer Sprache erhältlich sind.',
    },
    {
      id: 2,
      title: 'Hohe Qualität und Kundenzufriedenheit garantiert',
      description:
        'Jedes Buch in unserer Bibliothek wird sorgfältig ausgewählt, um ein einzigartiges Leseerlebnis zu gewährleisten, das Ihren Erwartungen entspricht.',
    },
    {
      id: 3,
      title: 'Einzigartige und benutzerfreundliche Dienste',
      description:
        'Genießen Sie ein reibungsloses Einkaufserlebnis auf unserer Website mit sicheren Zahlungsoptionen und engagiertem Kundenservice, der Ihnen jederzeit zur Verfügung steht.',
    },
    {
      id: 4,
      title: 'Sprachliche und kulturelle Vielfalt',
      description:
        'Wir sind bestrebt, Bücher in mehreren Sprachen aus unterschiedlichen Kulturen anzubieten, um Lesern aller Herkunft gerecht zu werden.',
    },
    {
      id: 5,
      title: 'Vertrauenswürdige Bewertungen und Empfehlungen',
      description:
        'Entdecken Sie empfohlene Bücher basierend auf Leserbewertungen und Expertenrezensionen, damit Sie immer das Beste auswählen.',
    },
    {
      id: 6,
      title: 'Attraktive Angebote und Rabatte',
      description:
        'Profitieren Sie von unseren exklusiven Rabatten und Angeboten für Buchliebhaber sowie von Treueprogrammen, die Ihr Erlebnis verbessern.',
    },
  ];
  const firstColumnCards = cardData.slice(0, 3);
  const lastColumnCards = cardData.slice(3);
  const { t } = useTranslation();
  return (
    <section>
      <SectionHeader title={t('Was zeichnet Sevilla aus?')} />
      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          {firstColumnCards.map((card) => (
            <NumberedCard
              key={card.id}
              number={card.id}
              title={t(card.title)}
              description={t(card.description)}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-10 lg:static lg:opacity-100 flex items-center justify-center order-first md:order-none">
          <img
            src="/images/whyus.png"
            className="w-full max-w-2xl object-contain"
            alt="Why choose us"
          />
        </div>

        <div className="flex flex-col gap-6">
          {lastColumnCards.map((card) => (
            <NumberedCard
              key={card.id}
              number={card.id}
              title={t(card.title)}
              description={t(card.description)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
