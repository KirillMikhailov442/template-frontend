import { createBrowserRouter } from 'react-router';

import { TestPage } from '@pages';
import { AppRoute } from '@shared/constants';

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <TestPage />,
  },
  {
    path: AppRoute.NotFound,
  },
]);
