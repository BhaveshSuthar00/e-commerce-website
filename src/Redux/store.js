import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Cart/Cart";
import Data from "./Data/Data";
import Login from "./Login/Login";

export const store = configureStore({
  reducer : {
    login : Login,
    data : Data,
    cart : Cart,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
})