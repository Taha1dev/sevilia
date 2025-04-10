import { OrderSummaryCard } from '@/components/sections/order-summary-car';
import { ShoppingCartCard } from '@/components/sections/shopping-cart-cards';

export const CartPage = (): JSX.Element => {
  return (
    <div className="flex h-full items-start gap-6 w-full">
      <ShoppingCartCard />
      <OrderSummaryCard />
    </div>
  );
};
