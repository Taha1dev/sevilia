import { BookMetaItem } from './book-meta-item';

interface BookMetaListProps {
  meta: { label: string; value: string }[];
}

export const BookMetaList = ({ meta }: BookMetaListProps) => (
  <div className="space-y-2">
    {meta.map((item, idx) => (
      <BookMetaItem key={idx} label={item.label} value={item.value} />
    ))}
  </div>
);
