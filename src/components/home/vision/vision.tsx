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
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 font-cairo">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-1">
            <h1 className="font-cortoba text-4xl sm:text-5xl md:text-6xl ltr:font-bold leading-tight text-white">
              {t(data.title)}
            </h1>

            <p className="text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              {t(data.desc)}
            </p>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2">
            <div className="bg-background rounded-3xl p-1 sm:p-1.5 md:p-2 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <img
                src={image}
                alt="Happy Kids!"
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
