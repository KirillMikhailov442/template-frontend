import { RouterProvider } from "react-router";
import { router } from "@app/routes";
import "@app/styles/index.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
