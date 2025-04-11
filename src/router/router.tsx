import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '@/screens/home/page';
import BooksPage from '@/screens/books/page';
import SingleBook from '@/screens/single-book/page';
import { CartPage } from '@/screens/cart/page';
import AboutPage from '@/screens/about/page';
import Contact from '@/screens/contact/page';
import FAQPage from '@/screens/faq/page';
import BillingAddressDialog from '@/components/sections/checkout/dialog';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'books', element: <BooksPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'test', element: <BillingAddressDialog /> },
      { path: 'books/:id', element: <SingleBook /> },
    ],
  },
]);
