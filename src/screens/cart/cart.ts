export interface CartItem {
  id: number;
  title: string;
  price: string;
  quantity: string;
  total: string;
  image: string;
}

export interface OrderSummaryItem {
  label: string;
  value: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logo: string | null;
}
