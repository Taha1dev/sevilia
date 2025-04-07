import { useState } from 'react';
import { bookFilters, books } from '@/constants/data';
import BookFilter from './book-filter';
import BookCard from './book-card';

export default function BookListPage() {
  const [selectedCategory, setSelectedCategory] = useState(bookFilters[0]);

  const filteredBooks = books.filter(
    (book) => book.category === selectedCategory
  );

  return (
    <div className="container mx-auto py-10">
      <h2 className="font-cortoba lg:text-4xl text-2xl mb-6">تصنيفات الكتب</h2>
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
              <p className="text-lg">لم يتم العثور على كتب</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
