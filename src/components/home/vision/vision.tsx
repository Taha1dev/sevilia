import { useTranslation } from 'react-i18next';
import image from '/images/books-collection.png';
export default function Vision() {
  const data = {
    title: 'Warum Sevilla wählen?',
    desc: `Wir vom Sevilla Verlag sind mehr als nur eine Buchhandlung. Wir sind ein Ziel, das die Leidenschaft für das Lesen mit dem Engagement verbindet, ein einzigartiges Einkaufserlebnis zu bieten. Wir bieten eine vielfältige und umfassende Auswahl an Büchern für jeden Geschmack, egal ob Sie ein Fan klassischer Literatur, moderner Romane oder auf der Suche nach seltenen Veröffentlichungen in verschiedenen Sprachen sind. Wir glauben, dass Qualität den entscheidenden Unterschied macht. Deshalb wählen wir jedes Buch sorgfältig aus, um ein unvergessliches Leseerlebnis zu gewährleisten. Darüber hinaus bietet unsere Website eine einfache und bequeme Benutzererfahrung mit sicheren Zahlungsoptionen und einem Kundenservice, der Ihnen jederzeit bei Fragen zur Verfügung steht.`,
  };
  const { t } = useTranslation();

  return (
    <div className="bg-main">
      <section className="container mx-auto font-cairo px-4 sm:px-8 py-12 ">
        <div className="grid lg:!grid-cols-2 gap-8 lg:!gap-44 items-center">
          <div className="text-white">
            <h1 className="font-cortoba text-variant/80 w-fit text-4xl sm:text-5xl lg:!text-6xl mb-6">
              {t(data.title)}
            </h1>
            <p className="text-xl tracking-wide leading-loose lg:!mb-8 max-w-2xl mx-auto lg:!mx-0 text-justify">
              {t(data.desc)}
            </p>
          </div>
          <div className="bg-background rounded-3xl relative">
            <img src={image} alt="Happy Kids!" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
