import { books } from '@/constants/data';

export default function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <div className="w-full max-w-[300px] flex flex-col items-center rounded-lg overflow-hidden shadow-md bg-white dark:bg-muted">
      <img
        src={book.image}
        alt={book.title}
        className="w-full lg:h-[300px] h-[250px] object-cover"
      />
      <div className="p-2 text-center text-sm">
        <p className="text-muted-foreground">{book.title}</p>
        <p className="text-primary font-semibold mt-1">{book.price} $</p>
      </div>
    </div>
  );
}
