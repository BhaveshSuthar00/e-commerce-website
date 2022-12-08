import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
);
