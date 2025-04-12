import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

import { useTranslation } from 'react-i18next';
import useIsRtl from '@/hooks/useIsRtl';

export const OrderSummaryCard = () => {
  const { t } = useTranslation();
  const isRtl = useIsRtl();
  const cartSummaryConfig = {
    title: t('Einkaufsübersicht'),
    summary: {
      items: [
        { label: t('Zwischensumme'), value: '€299.99' },
        { label: t('Versand'), value: '€29.00' },
        { label: t('Steuer'), value: '€29.00' },
      ],
      totalLabel: t('Gesamtsumme'),
      totalValue: '€357.99',
    },
    deliveryDate: {
      label: t('Voraussichtliches Lieferdatum'),
      value: '11/09/2025',
    },
    paymentTitle: t('Zahlungsmethode wählen'),
    agreement: {
      textStart: t('Ich stimme der'),
      policy: t('Rückerstattungsrichtlinie'),
      company: t('von Dar Eschbilia'),
    },
    buttonText: t('Jetzt kaufen abschließen'),
  };

  return (
    <Card className="flex flex-col items-center pb-6 bg-background rounded-xl overflow-hidden border border-border shadow-none">
      <CardHeader className="w-full p-4 md:p-6">
        <CardTitle className="font-medium text-lg text-start">
          {cartSummaryConfig.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-start gap-5 w-full px-4 md:px-6">
        <div className="flex flex-col items-start gap-6 w-full">
          {/* Order Summary Details */}
          <div className="flex flex-col items-end gap-4 w-full pb-4">
            <div className="flex flex-col items-end gap-3 w-full">
              {cartSummaryConfig.summary.items.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between"
                >
                  <div className="font-medium text-sm text-start">
                    {item.value}
                  </div>
                  <div className="font-normal text-muted-foreground text-sm text-start">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center justify-between pt-2">
              <div className="font-semibold text-base text-start">
                {cartSummaryConfig.summary.totalValue}
              </div>
              <div className="font-normal text-base text-start">
                {cartSummaryConfig.summary.totalLabel}
              </div>
            </div>
          </div>

          <Separator className="w-full" />

          <div className="w-full font-medium text-sm md:text-base text-start flex justify-between">
            <span>{cartSummaryConfig.deliveryDate.label}</span>
            <span>{cartSummaryConfig.deliveryDate.value}</span>
          </div>

          <Separator className="w-full" />

          <div className="w-full font-medium text-lg text-start">
            {cartSummaryConfig.paymentTitle}
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex w-full items-center gap-3">
          <Checkbox className="w-5 h-5 rounded-md border-orange cursor-pointer" />
          <div className="font-medium text-sm text-start">
            {cartSummaryConfig.agreement.textStart}{' '}
            <span className="underline cursor-pointer">
              {cartSummaryConfig.agreement.policy}
            </span>{' '}
            {cartSummaryConfig.agreement.company}
          </div>
        </div>

        {/* Checkout Button */}
        <Button className="w-full cursor-pointer justify-center gap-3 py-4 bg-orange hover:bg-orange/90">
          {isRtl ? (
            <>
              <span className="font-bold text-background text-base">
                {cartSummaryConfig.buttonText}
              </span>
              <ArrowLeftIcon className="w-5 h-5 text-background" />
            </>
          ) : (
            <>
              <span className="font-bold text-background text-base">
                {cartSummaryConfig.buttonText}
              </span>
              <ArrowRightIcon className="w-5 h-5 text-background" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
