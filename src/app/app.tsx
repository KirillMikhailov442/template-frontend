import { RouterProvider } from 'react-router';

import { router } from '@app/routes';
import '@app/styles/index.css';
import '@app/styles/vars.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
