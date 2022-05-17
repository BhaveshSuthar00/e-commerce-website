import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
const client = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </QueryClientProvider>
);
