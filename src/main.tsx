import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@app/app';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import '@app/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <ChakraProvider value={defaultSystem}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>,
);
