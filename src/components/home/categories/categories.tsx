import { useState } from 'react';
import { bookFilters, books } from '@/constants/data';
import BookFilter from './book-filter';
import BookCard from './book-card';
import { useTranslation } from 'react-i18next';

export default function BooksList() {
  const [selectedCategory, setSelectedCategory] = useState(bookFilters[1]);

  const filteredBooks = books.filter(
    (book) => book.category === selectedCategory
  );
  const { t } = useTranslation();
  return (
    <div className="bg-[#f0f1f2]">
      <div className="container mx-auto py-10">
        <h2 className="font-cortoba lg:text-4xl ltr:font-bold  text-2xl mb-6">
          {t('Buchklassifizierungen')}
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <BookFilter
            bookFilters={bookFilters}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center p-2">
            {filteredBooks.length ? (
              filteredBooks.map((book, i) => <BookCard key={i} book={book} />)
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                <p className="text-lg">{t('Keine Bücher gefunden')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
