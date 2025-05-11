import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice,
    }
})


export default store;