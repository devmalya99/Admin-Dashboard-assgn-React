

import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./01Slices/ProductSlice";

export default configureStore({
    reducer:{
        productsInfo: ProductReducer
    }
})

