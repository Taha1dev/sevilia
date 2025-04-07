import { cn } from '@/lib/utils';

export default function BookFilter({
  bookFilters,
  selected,
  setSelected,
}: {
  selected: string;
  bookFilters: string[];
  setSelected: (key: string) => void;
}) {
  return (
    <div className="lg:w-[180px] w-full overflow-x-auto lg:overflow-visible">
      <div className="flex lg:flex-col gap-2 px-2 py-4">
        {bookFilters.map((filter) => (
          <button
            key={filter}
            className={cn(
              'whitespace-nowrap cursor-pointer px-4 py-2 rounded-md text-sm font-medium',
              selected === filter
                ? 'bg-main text-white'
                : 'bg-muted text-muted-foreground hover:bg-accent'
            )}
            onClick={() => setSelected(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
