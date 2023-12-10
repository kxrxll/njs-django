import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
