import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '@/screens/home/page';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [{ path: '', element: <Home /> }],
  },
]);
