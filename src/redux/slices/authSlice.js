import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user:null,
    token:null,
    error:null,
    loading:false
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginRequest:(state)=>{
            state.error = null
            state.loading = true
        },
        loginSuccess:(state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token
            state.loading = false
        },
        loginFailure:(state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        logoutRequest:(state)=>{
            state.error = null
        },
        logoutSuccess:(state,action)=>{
            state.user = "";
            state.token = ""
        },
        logoutFailure:(state,action)=>{
            state.error = action.payload
        }
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure
} = authSlice.actions

export default authSlice.reducer