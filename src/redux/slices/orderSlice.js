import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    order: [],
    loading: false,
    error:null,
};

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        fetchOrderRequest:(state)=>{
            state.loading = true
        },
        fetchOrderSuccess:(state,action)=>{
            state.order= action.payload;
            state.loading=false
        },
        fetchOrderFailure:(state,action)=>{
            state.error = action.payload
        },
        fetchOrderByUserRequest:(state)=>{
            state.loading = true
        },
        fetchOrderByUserSuccess:(state,action)=>{
            state.order= action.payload;
            state.loading=false
        },
        fetchOrderByUserFailure:(state,action)=>{
            state.error = action.payload
        },
        fetchOrderForPickupRequest:(state)=>{
            state.loading = true
        },
        fetchOrderForPickupSuccess:(state,action)=>{
            state.order= action.payload;
            state.loading=false
        },
        fetchOrderForPickupFailure:(state,action)=>{
            state.error = action.payload
        },
        fetchDriverOrderRequest:(state)=>{
            state.loading = true
        },
        fetchDriverOrderSuccess:(state,action)=>{
            state.order= action.payload;
            state.loading=false
        },
        fetchDriverOrderFailure:(state,action)=>{
            state.error = action.payload
        },
        createOrderRequest:(state)=>{
            state.loading=true
        },
        createOrderSuccess:(state,action)=>{
            state.order.push(action.payload)
            state.loading=false
        },
        createOrderFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
        fetchOrderByIdRequest:(state)=>{
            state.loading = true
        },
        fetchOrderByIdSuccess:(state,action)=>{
            state.order= action.payload;
            state.loading=false
        },
        fetchOrderByIdFailure:(state,action)=>{
            state.error = action.payload
        },
    }
})

export const {
    fetchOrderRequest,
    fetchOrderSuccess,
    fetchOrderFailure,
    fetchOrderByUserRequest,
    fetchOrderByUserSuccess,
    fetchOrderByUserFailure,
    fetchOrderForPickupRequest,
    fetchOrderForPickupSuccess,
    fetchOrderForPickupFailure,
    fetchDriverOrderRequest,
    fetchDriverOrderSuccess,
    fetchDriverOrderFailure,
    createOrderRequest,
    createOrderSuccess,
    createOrderFailure,
    fetchOrderByIdRequest,
    fetchOrderByIdSuccess,
    fetchOrderByIdFailure,
} = orderSlice.actions

export default orderSlice.reducer