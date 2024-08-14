import{createSlice}from "@reduxjs/toolkit";

const farmerSlice = createSlice({
    name:"farmer",
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
});
export const {setToken,removerToken} = farmerSlice.actions;
export default farmerSlice.reducer;