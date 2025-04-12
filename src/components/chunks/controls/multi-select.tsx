import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { ChevronsUpDown, Check } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

import { createPortal } from 'react-dom';
type MultiSelectOption = {
  name: string;
  code: string;
};

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder: string;
}

export default function MultiSelect({
  options,
  selected,
  onChange,
  placeholder,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[150px] justify-between h-auto min-h-10"
        >
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selected.length > 2 ? (
                <Badge variant="secondary" className="rounded-sm">
                  {selected.length} selected
                </Badge>
              ) : (
                selected.map((value) => {
                  const label =
                    options.find((opt) => opt.code === value)?.name || value;
                  return (
                    <Badge
                      key={value}
                      variant="secondary"
                      className="rounded-sm"
                    >
                      {label}
                    </Badge>
                  );
                })
              )}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      {createPortal(
        <PopoverContent
          forceMount
          sideOffset={4}
          className="z-[1000] w-[200px] p-0"
        >
          <Command>
            <CommandInput
              placeholder={`Search ${placeholder.toLowerCase()}...`}
            />
            <CommandList>
              <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className="h-[200px] z-[1000] overflow-y-auto">
                  {options.map((option) => (
                    <CommandItem
                      key={option.code}
                      value={option.code}
                      onSelect={() => {
                        onChange(
                          selected.includes(option.code)
                            ? selected.filter((v) => v !== option.code)
                            : [...selected, option.code]
                        );
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          selected.includes(option.code)
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {option.name}
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>,
        document.body
      )}
    </Popover>
  );
}
