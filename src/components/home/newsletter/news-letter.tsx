import { useTranslation } from 'react-i18next';
import image from '/images/book-list.png';
export default function NewsLetter() {
  const data = {
    title:
      'Bleiben Sie über die neuesten Veröffentlichungen und Angebote auf dem Laufenden!',
    sub: 'Abonnieren Sie unseren Newsletter, um als Erster über neue Bücher, exklusive Rabatte und die neuesten Nachrichten aus der Welt des Lesens informiert zu werden. Wir garantieren Ihnen inspirierende und nützliche Inhalte direkt in Ihr E-Mail-Postfach.',
    input: {
      placeholder: 'Geben Sie Ihre E-Mail-ID ein',
      button: 'Abonnieren',
    },
  };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="rounded-2xl bg-[#f0f1f2] p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-last lg:order-first">
            <img
              src={image}
              alt="Newsletter"
              className="w-full h-auto max-w-md mx-auto object-cover rounded-lg"
            />
          </div>

          <div className="text-main">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              {t(data.title)}
            </h2>
            <p className="text-lg mb-6 leading-relaxed">{t(data.sub)}</p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
              <input
                type="email"
                placeholder={t(data.input.placeholder)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 cursor-pointer
                bg-orange hover:bg-orange-500 text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                {t(data.input.button)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
