import { createSlice } from "@reduxjs/toolkit";

    const cart = JSON.parse(localStorage.getItem('cart'))
    const initialState = {
        cart: cart ? cart : [],
    } 

const cartSlice = createSlice({
    name: 'cartProduct',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem(`cart`, JSON.stringify(state.cart));
        },
        deleteProductFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
            localStorage.setItem(`cart`, JSON.stringify(state.cart));
        }
    }
})


export const { addProductToCart, deleteProductFromCart } = cartSlice.actions

export default cartSlice.reducer