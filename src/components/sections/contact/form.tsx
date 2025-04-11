import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import useIsRtl from '@/hooks/useIsRtl';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FormField, FormTextarea } from '@/components/chunks/form-field';
import { Mail, MessageSquare, Pencil, Phone } from 'lucide-react';
interface FormValues {
  causeId: string;
  email: string;
  content: string;
  phone: string;
  title: string;
}
export default function ContactForm() {
  const { t } = useTranslation();
  const isRtl = useIsRtl();
  // const { mutateAsync, isLoading, errorMessage } = usePostReactMutation<
  //   CommunicationDto,
  //   CreateCommunicationDto
  // >({
  //   queryFn(props) {
  //     return Support.create({ ...props });
  //   },
  // });
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Ungültige E-Mail Adresse'))
      .required(t('{{name}} ist erforderlich', { name: t('E-Mail Adresse') })),
    phone: Yup.string()
      .required(t('{{name}} ist erforderlich', { name: t('Telefonnummer') }))
      .matches(
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
        t('Ungültige Telefonnummer')
      )
      .test(
        'min-length',
        t('Telefonnummer muss mindestens 6 Ziffern haben'),
        (value) => (value ? value.replace(/[^0-9]/g, '').length >= 6 : false)
      )
      .test(
        'max-length',
        t('Telefonnummer darf maximal 20 Ziffern haben'),
        (value) => (value ? value.replace(/[^0-9]/g, '').length <= 20 : false)
      ),
    title: Yup.string().required(
      t('{{name}} ist erforderlich', { name: t('Betreff') })
    ),
    content: Yup.string().required(
      t('{{name}} ist erforderlich', { name: t('Nachricht') })
    ),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      causeId: '',
      email: '',
      content: '',
      phone: '',
      title: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    const fields = document.querySelectorAll('input, textarea');
    fields.forEach((field) => {
      field.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    });
  }, [isRtl]);
  return (
    <div className="container mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 py-10 lg:py-20 px-4 lg:px-0">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-muted w-full rounded-3xl py-8 lg:py-12 px-6 lg:px-10 flex flex-col gap-8 lg:gap-12 col-span-3 *:font-cairo"
      >
        <FormField
          label={t('E-Mail Adresse')}
          icon={<Mail className="size-5 text-muted-foreground" />}
          id="email"
          type="email"
          placeholder={t('E-Mail Adresse')}
          error={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps('email')}
        />

        <FormField
          label={t('Telefonnummer')}
          icon={<Phone className="size-5 text-muted-foreground" />}
          id="phone"
          type="tel"
          placeholder={t('Telefonnummer')}
          error={formik.touched.phone && formik.errors.phone}
          {...formik.getFieldProps('phone')}
        />

        <FormField
          label={t('Betreff')}
          icon={<Pencil className="size-5 text-muted-foreground" />}
          id="title"
          type="text"
          placeholder={t('Betreff')}
          error={formik.touched.title && formik.errors.title}
          {...formik.getFieldProps('title')}
        />

        <FormTextarea
          label={t('Nachricht')}
          icon={<MessageSquare className="size-5 text-muted-foreground" />}
          id="content"
          placeholder={t('Nachricht')}
          error={formik.touched.content && formik.errors.content}
          {...formik.getFieldProps('content')}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full lg:w-auto text-lg bg-main hover:bg-main"
        >
          {t('Senden')}
        </Button>
      </form>

      <div className="w-full col-span-2 hidden lg:block">
        <img
          src="/images/contact-image.jpg"
          alt="Contact Form"
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
