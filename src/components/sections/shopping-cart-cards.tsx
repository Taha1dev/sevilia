import { ArrowLeftIcon, MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cartItems } from '@/screens/cart/dummy';

export const ShoppingCartCard = () => {
  return (
    <Card className="flex flex-col items-end bg-gray-00 rounded-[15px] border border-solid border-[#e4e7e9]">
      <CardHeader className="w-full px-6 py-5">
        <CardTitle className=" font-medium text-gray-900 text-lg tracking-[0] leading-6 [font-family:'Cairo',Helvetica] [direction:rtl]">
          سلة الشراء
        </CardTitle>
      </CardHeader>

      <Table>
        <TableHeader className="bg-main border border-solid border-[#e4e7e9]">
          <TableRow>
            <TableHead className="w-28 [font-family:'Cairo',Helvetica] font-medium text-white text-base tracking-[0] leading-6 [direction:rtl] text-right">
              الإجمالي
            </TableHead>
            <TableHead className="w-[172px] [font-family:'Cairo',Helvetica] font-medium text-white text-base tracking-[0] leading-6 [direction:rtl] text-right">
              الكمية
            </TableHead>
            <TableHead className="w-[88px] [font-family:'Cairo',Helvetica] font-medium text-white text-base tracking-[0] leading-6 [direction:rtl] text-right">
              السعر
            </TableHead>
            <TableHead className="w-[380px] [font-family:'Cairo',Helvetica] font-medium text-white text-base tracking-[0] leading-6 [direction:rtl] text-right">
              المنتجات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item, index) => (
            <TableRow key={item.id} className="relative">
              <TableCell className="w-28 [font-family:'Cairo',Helvetica] font-medium text-gray-900 text-sm tracking-[0] leading-5 [direction:rtl]">
                {item.total}
              </TableCell>
              <TableCell>
                <div className="flex w-[148px] items-center justify-between px-5 py-3 bg-gray-00 rounded-[3px] border border-solid border-[#e4e7e9]">
                  <PlusIcon className="w-4 h-4" />
                  <div className="[font-family:'Cairo',Helvetica] font-normal text-gray-700 text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    {item.quantity}
                  </div>
                  <MinusIcon className="w-4 h-4" />
                </div>
              </TableCell>
              <TableCell className="w-[88px]">
                <div className="w-[77px] font-normal text-gray-700 [font-family:'Cairo',Helvetica] text-sm tracking-[0] leading-5 [direction:rtl]">
                  {item.price}
                </div>
              </TableCell>
              <TableCell className="w-[379px]">
                <div className="flex items-center justify-end gap-3">
                  <div className="w-[260px] font-semibold text-gray-900 text-base tracking-[0] leading-[31.2px] [font-family:'Cairo',Helvetica] [direction:rtl]">
                    {item.title}
                  </div>
                  <img
                    className="w-[89.47px] h-[120.21px] mt-[-11.80px] mb-[-19.67px] mr-[-15.73px] object-cover"
                    alt="Book cover"
                    src={item.image}
                  />
                </div>
              </TableCell>
              {index > 0 && (
                <div className="absolute w-10 h-[39px] top-[15px] -left-1.5 bg-[#ffecea] rounded-[19.81px/19.27px] flex items-center justify-center">
                  <Trash2Icon className="w-5 h-5" />
                </div>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Separator className="w-full" />

      <div className="flex w-[872px] gap-[500px] p-6 items-center">
        <Button
          variant="outline"
          className="justify-center gap-2 px-6 py-0 rounded-[10px] border-2 border-solid border-[#416ba9] items-center h-12"
        >
          <ArrowLeftIcon className="w-5 h-5 text-[#416ba9]" />
          <span className="[font-family:'Cairo',Helvetica] font-bold text-[#416ba9] text-sm text-left tracking-[0.17px] leading-[48px] whitespace-nowrap [direction:rtl]">
            العودة إلى متجر
          </span>
        </Button>
      </div>
    </Card>
  );
};
