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
      <section className="relative font-cairo px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Text Content - Reordered on mobile, always first on desktop */}
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              <h1 className="font-cortoba text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl ltr:font-bold leading-tight md:leading-tight lg:leading-tight text-white">
                {t(data.title)}
              </h1>

              <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 leading-relaxed md:leading-relaxed max-w-2xl">
                {t(data.desc)}
              </p>

              <div className="pt-2 md:pt-4">
                <button
                  type="button"
                  className="rounded-full cursor-pointer text-lg md:text-xl bg-orange px-8 py-3 md:px-10 md:py-4 text-white font-semibold hover:bg-orange/90 transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                  aria-label={t(data.cta.title)}
                >
                  {t(data.cta.title)}
                </button>
              </div>
            </div>

            {/* Image - Reordered on mobile, always second on desktop */}
            <div className="order-1 lg:order-2">
              <img
                src={heroImage}
                alt="Happy Kids!"
                className="w-full h-auto max-w-[600px] mx-auto lg:max-w-none "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
