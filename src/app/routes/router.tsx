import { createBrowserRouter } from 'react-router';

import LoginPage from '@pages/login';
import Page404 from '@pages/not-found';
import { AppRoute } from '@shared/constants';

import MainLayout from '../layouts/main';
import LayoutWithSidebar from '../layouts/sidebar';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AppRoute.Login,
        element: <LoginPage />,
      },
      {
        path: AppRoute.Root,
        element: <LayoutWithSidebar />,
        children: [
          {
            path: AppRoute.Root,
            element: <div>sdsd</div>,
          },
        ],
      },
    ],
  },
  {
    path: AppRoute.NotFound,
    element: <Page404 />,
  },
]);
