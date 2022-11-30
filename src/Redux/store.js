import { configureStore } from "@reduxjs/toolkit";
import Data from "./Data/Data";
import Login from "./Login/Login";

export const store = configureStore({
  reducer : {
    login : Login,
    Data : Data,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    }),
})