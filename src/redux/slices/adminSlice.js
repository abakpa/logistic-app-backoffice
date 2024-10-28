import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    admin: [],
    loading: false,
    error:null,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        fetchAdminsRequest: (state) => {
            state.loading = true
        },
        fetchAdminsSuccess:(state,action)=>{
            state.admin = action.payload;
            state.loading = false;
        },
        fetchAdminsFailure:(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        createAdminRequest:(state)=>{
            state.loading = true
        },
        createAdminSuccess: (state,action) =>{
            state.admin.push(action.payload)
            state.loading = false
        },
        createAdminFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        }
    }
})

export const {
    fetchAdminsRequest,
    fetchAdminsSuccess,
    fetchAdminsFailure,
    createAdminRequest,
    createAdminSuccess,
    createAdminFailure
} = adminSlice.actions;

export default adminSlice.reducer