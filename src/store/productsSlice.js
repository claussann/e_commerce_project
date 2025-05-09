import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
    }

})

export const { setProducts, addProducts } = productsSlice.actions
export default productsSlice.reducer