import { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { countries } from '@/data/countries'; // Assuming you have a countries list
import { FormField, FormTextarea } from '@/components/chunks/form-field'; // Assuming you have a FormField component
import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';

interface BillingAddressFormValues {
  firstName: string;
  lastName: string;
  invoiceTitle: string;
  street: string;
  houseNumber: string;
  addressDetails?: string;
  zip: string;
  city: string;
  country: string;
  isSameAsShipping: boolean;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Vorname ist erforderlich')
    .min(2, 'Vorname muss mindestens 2 Zeichen lang sein')
    .max(50, 'Vorname darf maximal 50 Zeichen lang sein'),
  lastName: Yup.string()
    .required('Nachname ist erforderlich')
    .min(2, 'Nachname muss mindestens 2 Zeichen lang sein')
    .max(50, 'Nachname darf maximal 50 Zeichen lang sein'),
  invoiceTitle: Yup.string()
    .required('Rechnungstitel ist erforderlich')
    .max(100, 'Rechnungstitel darf maximal 100 Zeichen lang sein'),
  street: Yup.string()
    .required('Straßenname ist erforderlich')
    .max(100, 'Straßenname darf maximal 100 Zeichen lang sein'),
  houseNumber: Yup.string()
    .required('Hausnummer ist erforderlich')
    .max(20, 'Hausnummer darf maximal 20 Zeichen lang sein'),
  addressDetails: Yup.string().max(
    200,
    'Adresszusatz darf maximal 200 Zeichen lang sein'
  ),
  zip: Yup.string()
    .required('Postleitzahl ist erforderlich')
    .matches(/^[0-9]+$/, 'Postleitzahl darf nur Zahlen enthalten')
    .min(4, 'Postleitzahl muss mindestens 4 Zeichen lang sein')
    .max(10, 'Postleitzahl darf maximal 10 Zeichen lang sein'),
  city: Yup.string()
    .required('Stadt ist erforderlich')
    .max(100, 'Stadtname darf maximal 100 Zeichen lang sein'),
  country: Yup.string().required('Land ist erforderlich'),
  isSameAsShipping: Yup.boolean(),
});

const initialValues: BillingAddressFormValues = {
  firstName: '',
  lastName: '',
  invoiceTitle: '',
  street: '',
  houseNumber: '',
  addressDetails: '',
  zip: '',
  city: '',
  country: '',
  isSameAsShipping: false,
};

export default function BillingAddressDialog() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setOpen(false);
    },
  });

  const { values, errors, touched, handleSubmit, setFieldValue, resetForm } =
    formik;

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      resetForm();
    }
  };
  const [search, setSearch] = useState('');

  const filteredCountries = useMemo(() => {
    return countries.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [countries, search]);
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">{t('Rechnungsadresse bearbeiten')}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('Rechnungsadresse')}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label={t('Vorname')}
              error={touched.firstName ? errors.firstName : undefined}
              {...formik.getFieldProps('firstName')}
            />

            <FormField
              label={t('Nachname')}
              error={touched.lastName ? errors.lastName : undefined}
              {...formik.getFieldProps('lastName')}
            />
          </div>

          <FormField
            label={t('Titel der Rechnung')}
            error={touched.invoiceTitle ? errors.invoiceTitle : undefined}
            {...formik.getFieldProps('invoiceTitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label={t('Straßenname')}
              error={touched.street ? errors.street : undefined}
              {...formik.getFieldProps('street')}
            />

            <FormField
              label={t('Hausnummer')}
              error={
                formik.touched.houseNumber ? errors.houseNumber : undefined
              }
              {...formik.getFieldProps('houseNumber')}
            />
          </div>

          <FormTextarea
            icon={<MessageSquare className="size-5 text-muted-foreground" />}
            id="content"
            placeholder={t('Nachricht')}
            label={t('Adresse (optional)')}
            error={
              formik.touched.addressDetails && formik.errors.addressDetails
            }
            {...formik.getFieldProps('addressDetails')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              label={t('PLZ')}
              error={touched.zip ? errors.zip : undefined}
              {...formik.getFieldProps('zip')}
            />

            <FormField
              label={t('Stadt')}
              error={touched.city ? errors.city : undefined}
              {...formik.getFieldProps('city')}
            />

            <div className="w-full space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                {t('Land')}
              </Label>
              <Select
                value={values.country}
                onValueChange={(value) => setFieldValue('country', value)}
              >
                <SelectTrigger
                  className={cn(
                    'w-full transition-colors duration-200',
                    touched.country && errors.country
                      ? 'border-red-500 focus:ring-red-500'
                      : 'focus:ring-main'
                  )}
                >
                  <SelectValue placeholder={t('Land wählen')} />
                </SelectTrigger>
                <SelectContent>
                  <div className="px-3 py-2">
                    <Input
                      placeholder={t('Suchen...')}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="h-8"
                    />
                  </div>
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <SelectItem key={country.code} value={country.name}>
                        {country.name}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      {t('Keine Ergebnisse')}
                    </div>
                  )}
                </SelectContent>
              </Select>
              {touched.country && errors.country && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {t(errors.country)}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="sameAsShipping"
              checked={values.isSameAsShipping}
              onCheckedChange={(checked) =>
                setFieldValue('isSameAsShipping', checked === true)
              }
            />
            <label htmlFor="sameAsShipping" className="text-sm">
              {t('Rechnungsadresse entspricht der Lieferadresse')}
            </label>
          </div>

          <div className="pt-4 flex ">
            <Button type="submit" className="w-full bg-orange hover:bg-orange">
              {t('Speichern')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
