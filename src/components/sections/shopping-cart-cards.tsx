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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: string;
  quantity: number;
  total: string;
}

export const ShoppingCartCard = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'Product 1',
      image: '/images/b1.png',
      price: '$10.00',
      quantity: 1,
      total: '$10.00',
    },
    {
      id: 2,
      title: 'Product 2',
      image: '/images/b2.png',
      price: '$15.00',
      quantity: 2,
      total: '$30.00',
    },
    {
      id: 3,
      title: 'Product 1',
      image: '/images/b1.png',
      price: '$10.00',
      quantity: 1,
      total: '$10.00',
    },
    {
      id: 4,
      title: 'Product 2',
      image: '/images/b2.png',
      price: '$15.00',
      quantity: 2,
      total: '$30.00',
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const priceValue = parseFloat(item.price.replace('$', ''));
          return {
            ...item,
            quantity: newQuantity,
            total: `$${(priceValue * newQuantity).toFixed(2)}`,
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number): void => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = (): string => {
    const total = cartItems.reduce((sum, item) => {
      const priceValue = parseFloat(item.price.replace('$', ''));
      return sum + priceValue * item.quantity;
    }, 0);
    return `$${total.toFixed(2)}`;
  };
  const { t } = useTranslation();

  const cartConfig = {
    title: t('Einkaufswagen'),
    labels: {
      product: t('Produkte'),
      total: t('Gesamt'),
      quantity: t('Menge'),
      price: t('Preis'),
      actions: t('Aktionen'),
      backToStore: t('Zurück zum Shop'),
      totalAmount: t('Gesamtsumme'),
    },
    buttons: {
      increase: t('Menge erhöhen'),
      decrease: t('Menge verringern'),
      remove: t('Artikel entfernen'),
    },
  };

  return (
    <Card className="rounded-lg border border-border shadow-none w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="font-medium text-lg">
          {cartConfig.title}
        </CardTitle>
      </CardHeader>

      <div className="overflow-x-auto w-full">
        <Table className="min-w-[600px] sm:min-w-full">
          <TableHeader className="bg-main hover:!bg-main">
            <TableRow className="*:text-center">
              <TableHead className="font-medium text-white !text-start ps-5 whitespace-nowrap">
                {cartConfig.labels.product}
              </TableHead>
              <TableHead className="font-medium text-white whitespace-nowrap">
                {cartConfig.labels.total}
              </TableHead>
              <TableHead className="font-medium text-white whitespace-nowrap">
                {cartConfig.labels.quantity}
              </TableHead>
              <TableHead className="font-medium text-white whitespace-nowrap">
                {cartConfig.labels.price}
              </TableHead>
              <TableHead className="font-medium text-white whitespace-nowrap">
                {cartConfig.labels.actions}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-2 md:gap-4">
                    <img
                      src={item.image}
                      alt={`${item.title} Bild`}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                    <div className="font-semibold text-sm sm:text-base text-right truncate max-w-[160px] sm:max-w-none">
                      {item.title}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-center">
                  {item.total}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-between p-2 bg-background rounded border border-border w-fit mx-auto">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-6"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={cartConfig.buttons.increase}
                    >
                      <PlusIcon className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                    <div className="font-normal text-base text-center min-w-[24px]">
                      {item.quantity}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-6"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={cartConfig.buttons.decrease}
                    >
                      <MinusIcon className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-normal text-sm text-right">
                    {item.price}
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    size="icon"
                    className="bg-destructive/10 rounded-full hover:bg-destructive/20 transition-colors"
                    onClick={() => removeItem(item.id)}
                    aria-label={cartConfig.buttons.remove}
                  >
                    <Trash2Icon className="text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-6 gap-4">
        <Button
          variant="outline"
          className="gap-2 cursor-pointer border-2 border-main h-12 w-full md:w-auto"
        >
          <ArrowLeftIcon className="w-5 h-5 text-main" />
          <span className="font-bold text-main text-sm">
            {cartConfig.labels.backToStore}
          </span>
        </Button>

        <div className="w-full md:w-auto text-lg font-medium text-center">
          {cartConfig.labels.totalAmount}: {calculateTotal()}
        </div>
      </div>
    </Card>
  );
};
