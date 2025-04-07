import { useTranslation } from 'react-i18next';
import heroImage from '/images/hero-books.png';

export default function Hero() {
  const data = {
    title:
      'Entdecken Sie die Welt einzigartiger Bücher und inspirierender Geschichten!',
    desc: 'Wir bieten Ihnen eine sorgfältig ausgewählte Sammlung von Büchern und Romanen in mehr als einer Sprache. Kaufen Sie jetzt ein und genießen Sie ein einzigartiges Leseerlebnis, das Kultur und Kreativität vereint.',
    cta: {
      title: 'Jetzt entdecken',
      action: '',
    },
  };
  const { t } = useTranslation();

  return (
    <main className="relative overflow-x-hidden bg-gradient-to-l from-main to-main/90">
      <section className=" relative font-cairo px-4 sm:px-8 py-12 lg:!py-24">
        <div className="grid lg:!grid-cols-2 gap-8 lg:!gap-24 items-center">
          <div className="order-2">
            <img
              src={heroImage}
              alt="Happy Kids!"
              className="w-full h-auto "
            />
          </div>

          <div className="order-1 text-white">
            <h1 className="font-cortoba w-fit text-4xl sm:text-5xl lg:!text-6xl mb-6">
              {t(data.title)}
            </h1>
            <p className="text-lg mb-6 lg:!mb-8 max-w-2xl mx-auto lg:!mx-0 text-justify">
              {t(data.desc)}
            </p>
            <button
              type="button"
              className="rounded-full cursor-pointer sm:text-lg bg-orange px-6 py-3 sm:py-4 text-white font-medium text-xl hover:bg-orange/90 transition-colors duration-200"
              aria-label={t(data.cta.title)}
            >
              {t(data.cta.title)}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
