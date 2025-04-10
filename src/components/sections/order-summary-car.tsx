import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { orderSummary } from '@/screens/cart/dummy';

export const OrderSummaryCard = () => {
  return (
    <Card className="flex flex-col h-[909px] items-center pb-6 bg-gray-00 rounded-[15px] overflow-hidden border border-solid border-[#e4e7e9]">
      <CardHeader className="w-full px-6 py-5">
        <CardTitle className="w-[376px] [font-family:'Cairo',Helvetica] font-medium text-gray-900 text-lg tracking-[0] leading-6 [direction:rtl]">
          إجماليات الشراء
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-start gap-[19px] w-full">
        <div className="flex flex-col items-start gap-[26px] w-full">
          {/* Order Summary Details */}
          <div className="flex flex-col h-44 items-end gap-4 w-full pb-6">
            <div className="flex flex-col items-end gap-3 pb-1 w-full">
              {orderSummary.map((item, index) => (
                <div
                  key={index}
                  className="flex w-[376px] items-center justify-between"
                >
                  <div className="w-fit mt-[-1.00px] font-medium text-gray-900 whitespace-nowrap [font-family:'Cairo',Helvetica] text-sm tracking-[0] leading-5 [direction:rtl]">
                    {item.value}
                  </div>
                  <div className="w-fit mt-[-1.00px] [font-family:'Cairo',Helvetica] font-normal text-gray-600 text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-[376px] items-center justify-between">
              <div className="w-fit mt-[-1.00px] font-semibold text-gray-900 text-base tracking-[0] leading-6 whitespace-nowrap [font-family:'Cairo',Helvetica] [direction:rtl]">
                357.99 دولار أمريكي
              </div>
              <div className="w-fit mt-[-1.00px] font-normal text-gray-900 text-base tracking-[0] leading-6 whitespace-nowrap [font-family:'Cairo',Helvetica] [direction:rtl]">
                الملخص
              </div>
            </div>
          </div>

          <Separator className="w-[371.01px]" />

          <div className="w-[376px] h-[29px] [font-family:'Cairo',Helvetica] font-medium text-gray-900 text-[15px] tracking-[0] leading-6 [direction:rtl]">
            تاريخ المتوقع للتسليم
            <span className="float-left">11/09/2025</span>
          </div>

          <Separator className="w-[371.01px]" />

          <div className="w-[376px] h-[29px] font-medium text-gray-900 text-lg tracking-[0] leading-6 [font-family:'Cairo',Helvetica] [direction:rtl]">
            اختر طريقة الدفع
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex w-[376px] items-center justify-end gap-3">
          <div className="w-[339px] font-medium text-black text-sm tracking-[0] leading-[normal] [font-family:'Cairo',Helvetica] [direction:rtl]">
            <span className="[font-family:'Cairo',Helvetica] font-medium text-black text-sm tracking-[0]">
              أنا أوافق على{' '}
            </span>
            <span className="underline">سياسة الترجيع</span>
            <span className="[font-family:'Cairo',Helvetica] font-medium text-black text-sm tracking-[0]">
              {' '}
              الخاصة بدار اشبيلية{' '}
            </span>
          </div>
          <Checkbox className="w-[25px] h-[25px] rounded-[7.81px] border-[1.04px] border-solid border-[#ff9e18] shadow-[0px_1.04px_3.12px_#1a1a1a14]" />
        </div>

        {/* Checkout Button */}
        <Button className="w-[376px] justify-center gap-3 px-8 py-0 bg-[#ff9e18] rounded-lg items-center h-14">
          <ArrowLeftIcon className="w-6 h-6 text-gray-00" />
          <span className="font-bold text-gray-00 text-base tracking-[0.19px] leading-[56px] whitespace-nowrap [font-family:'Cairo',Helvetica] [direction:rtl]">
            إتمام عملية الشراء
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
