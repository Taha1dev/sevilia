import { CartItem, OrderSummaryItem } from './cart';

export const cartItems: CartItem[] = [
  {
    id: 1,
    title: 'مغامرات في عالم الألوان',
    price: '70 دولار',
    quantity: '01',
    total: '70 دولار',
    image: '/image-10.png',
  },
  {
    id: 2,
    title: 'مغامرات في عالم الألوان',
    price: '70 دولار',
    quantity: '01',
    total: '70 دولار',
    image: '/image-10-1.png',
  },
  {
    id: 3,
    title: 'مغامرات في عالم الألوان',
    price: '70 دولار',
    quantity: '01',
    total: '70 دولار',
    image: '/image-10-2.png',
  },
  {
    id: 4,
    title: 'مغامرات في عالم الألوان',
    price: '70 دولار',
    quantity: '01',
    total: '70 دولار',
    image: '/image-10-3.png',
  },
  {
    id: 5,
    title: 'مغامرات في عالم الألوان',
    price: '70 دولار',
    quantity: '01',
    total: '70 دولار',
    image: '/image-10-4.png',
  },
];

export const orderSummary: OrderSummaryItem[] = [
  { label: 'الإجمالي', value: '350 دولار' },
  { label: 'شحن', value: 'مجانا' },
  { label: 'خصم', value: '24 دولار' },
  { label: 'ضريبة', value: '61.99 دولار' },
];
