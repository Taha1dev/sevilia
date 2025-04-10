import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '@/screens/home/page';
import BooksPage from '@/screens/books/page';
import SingleBook from '@/screens/single-book/page';
import { CartPage } from '@/screens/cart/page';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'books', element: <BooksPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'books/:id', element: <SingleBook /> },
    ],
  },
]);
