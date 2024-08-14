import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:"user",
    initialState:{
        token:null,
    },
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload;
        },
        removerToken:(state)=>{
            state.token=null;

        },
    },
})
export const {setToken,removerToken} = userSlice.actions;
export default userSlice.reducer;