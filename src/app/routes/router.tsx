import { createBrowserRouter } from 'react-router';

import LoginPage from '@pages/login';
import Page404 from '@pages/not-found';
import { AppRoute } from '@shared/constants';

import AuthorizationLayout from '../layouts/authorization';
import MainLayout from '../layouts/main';
import LayoutWithSidebar from '../layouts/sidebar';
import Templates from '@pages/Templates';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AppRoute.Login,
        element: <LoginPage />,
      },
      {
        element: <AuthorizationLayout />,
        children: [
          {
            path: AppRoute.Root,
            element: <LayoutWithSidebar />,
            children: [
              {
                path: AppRoute.Templates,
                element: <Templates/>
              },
              {
                path: AppRoute.Root,
                element: <div>sdsd</div>,
              }
            ],
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