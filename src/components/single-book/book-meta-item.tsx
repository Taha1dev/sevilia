interface BookMetaItemProps {
  label: string;
  value: string;
}

export const BookMetaItem = ({ label, value }: BookMetaItemProps) => (
  <div className="flex justify-between text-sm sm:text-base">
    <span className="text-main font-medium">{label}</span>
    <span className="font-semibold text-left">{value}</span>
  </div>
);