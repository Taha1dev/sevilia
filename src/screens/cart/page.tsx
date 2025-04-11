import { OrderSummaryCard } from '@/components/sections/cart/order-summary-car';
import { ShoppingCartCard } from '@/components/sections/cart/shopping-cart-cards';

export const CartPage = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-stretch gap-6 w-full p-4 md:p-6 lg:p-8">
      <div className="flex-1">
        <ShoppingCartCard />
      </div>
      <OrderSummaryCard />
    </div>
  );
};
