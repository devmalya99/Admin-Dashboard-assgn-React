

import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice=createSlice({

    name:'productsInfo',
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },

        //In Redux, the dispatched action is an 
        //object which must have a type property, and it can optionally contain other properties like payload. 
        //The payload is typically used to carry the data for the Redux store update
    /*
    If you perform a console.log(action.payload) within your reducer function (in the context of your previous addProduct action), 
    you're expected to see the product data that was dispatched from InputCard component as a JavaScript object.
    */

    deleteProduct: (state,action)=>{
        return state.filter((product)=>product.productId!==action.payload)
    }
    
    }

});

export const {addProduct ,deleteProduct} =ProductSlice.actions
export default ProductSlice.reducer