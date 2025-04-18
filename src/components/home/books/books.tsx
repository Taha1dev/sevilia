import { books } from '@/constants/data';
import BookCard from '../categories/book-card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Books() {
  const { t } = useTranslation();
  return (
    <div className="px-4 md:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6 md:mb-8 lg:mb-10">
        <h3 className="font-cortoba text-2xl ltr:font-bold  sm:text-3xl lg:text-4xl text-variant">
          {t('Bestseller')}
        </h3>
        <button className="rounded-xl bg-orange px-4 py-2 text-white font-medium hover:bg-orange-600 transition-colors duration-200">
          <Link to={'/books'}>{t('Alle ansehen')}</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {books.slice(0, 4).map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </div>
  );
}
