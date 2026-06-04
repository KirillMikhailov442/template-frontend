import { createBrowserRouter } from "react-router";

import { AppRoute } from "@shared/constants";

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
  },
  {
    path: AppRoute.NotFound,
  },
]);
