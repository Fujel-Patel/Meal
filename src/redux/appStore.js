import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice.js";
import restaurantReducer from "../features/restaurantSlice.js";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});

export default appStore;
