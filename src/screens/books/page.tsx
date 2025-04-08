import BookFilterSidebarToggle from '@/components/chunks/books-filter';
import BookCard from '@/components/home/categories/book-card';
import { books } from '@/constants/data';
import useIsRtl from '@/hooks/useIsRtl';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BooksPage() {
  const { t } = useTranslation();
  const isRtl = useIsRtl();
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4">
        <div className="w-full sm:w-1/2 relative">
          <input
            type="text"
            placeholder={t('Finden Sie ein Buch...')}
            className={`w-full ${
              isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
            } py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main ${
              isRtl ? 'text-right' : 'text-left'
            }`}
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        <div className="self-end">
          <BookFilterSidebarToggle />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
        {books.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </div>
  );
}
