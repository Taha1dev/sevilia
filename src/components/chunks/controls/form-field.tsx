import { ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

type FormFieldProps = {
  label: string;
  icon?: ReactNode;
  id?: string;
  type?: string;
  placeholder?: string;
  error?: string | false;
  className?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};
type FormTextareaProps = {
  label: string;
  icon: ReactNode;
  id: string;
  placeholder?: string;
  error?: string | false;
  className?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
};

export function FormField({
  label,
  icon,
  id,
  type = 'text',
  placeholder,
  error,
  className,
  ...props
}: FormFieldProps) {
  const {t} = useTranslation()
  return (
    <div className="w-full space-y-2 ">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            'w-full transition-colors duration-200',
            icon ? 'pl-10' : 'pl-3',
            error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-main',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-600 text-xs mt-1 font-medium">{t(error)}</p>
      )}
    </div>
  );
}

export function FormTextarea({
  label,
  icon,
  id,
  placeholder,
  error,
  className,
  ...props
}: FormTextareaProps) {
  const {t} = useTranslation()
  return (
    <div className="w-full space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-4 text-gray-400">{icon}</span>
        )}
        <Textarea
          id={id}
          placeholder={placeholder}
          className={cn(
            'w-full min-h-[100px] transition-colors duration-200',
            icon ? 'pl-10' : 'pl-3',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'focus:ring-2 focus:ring-main',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-600 text-xs mt-1 font-medium">{t(error)}</p>
      )}
    </div>
  );
}
