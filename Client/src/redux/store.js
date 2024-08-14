import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import farmerSlice from "./farmerSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlice,
        farmer:farmerSlice,
    },
})
export default store;
