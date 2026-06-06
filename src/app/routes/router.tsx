import { createBrowserRouter } from 'react-router';

import { TestPage } from '@pages';
import { AppRoute } from '@shared/constants';

import MainLayout from '../layouts/main';
import LayoutWithSidebar from '../layouts/sidebar';
import Page404 from '@pages/not-found';
import PageError from '@shared/ui/ErrorMessage';
import Templates from '@pages/Templates';


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AppRoute.Root,
        element: <LayoutWithSidebar />,
        children: [
          {
            path: AppRoute.Root,
            element: <TestPage />,
          },
          {
            path: AppRoute.Error,
            element: <PageError/>
          },
          {
            path: AppRoute.Templates,
            element: <Templates/>

          }
        ],
      },
    ],
  },
  {
    path: AppRoute.NotFound,
    element: <Page404/>
  }
]);
