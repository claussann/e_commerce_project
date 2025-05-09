import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./productsSlice";

const store = configureStore({
    reducer: { products: cardsReducer }
})

export default store