import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../../../../api/controllers/auth.controller";

const initialState = {
    CurrentUser:null,
    loading:false,
    error:false,
};


const userSlice = createSlice({
name:'user',
initialState,
reducers:{
    signInStart:(state)=>{
        state.loading=true;
    },
    signInSuccess:(state,action)=>{
        state.CurrentUser=action.payload;
        state.loading=false;
        state.error=false;
    },
    signInFailure:(state,action)=>{
        state.loading = false;
        state.error=action.payload;
    }
}
});

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;

export default userSlice.reducer;