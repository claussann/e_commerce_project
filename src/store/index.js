import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        products: cardsReducer,
        cart: cartReducer
    }
})

export default store