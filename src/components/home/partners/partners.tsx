import { Link } from 'react-router-dom';
import SectionHeader from '../../chunks/section-header';
import { useTranslation } from 'react-i18next';

const partners = [
  {
    name: 'Partner 1',
    logo: '/images/p1.png',
    link: import.meta.env.VITE_CORDOBA_URL,
  },
  {
    name: 'Partner 2',
    logo: '/images/p2.png',
    link: import.meta.env.VITE_SEVILLA_URL,
  },
];

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section className="">
      <SectionHeader title={t('Unsere Partner')} />
      <main className="bg-main px-12 rounded-4xl max-w-7xl mx-auto relative flex flex-col items-center justify-center lg:!gap-12 gap-8 py-12">
        <section className="container relative mx-12 rounded-[35px] grid grid-cols-1 lg:!grid-cols-2 items-center lg:!items-stretch gap-9">
          {partners.map((partner, index) => (
            <Link
              key={index}
              to={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[20px] p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <img src={partner.logo} alt={partner.name} />
            </Link>
          ))}
        </section>
      </main>
    </section>
  );
}
