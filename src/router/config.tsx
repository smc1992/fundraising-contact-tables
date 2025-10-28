
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import ImpressumPage from '../pages/impressum/page';
import DatenschutzPage from '../pages/datenschutz/page';
import NotFound from '../pages/NotFound';
import DankePage from '../pages/danke/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/impressum',
    element: <ImpressumPage />,
  },
  {
    path: '/datenschutz',
    element: <DatenschutzPage />,
  },
  {
    path: '/danke',
    element: <DankePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
