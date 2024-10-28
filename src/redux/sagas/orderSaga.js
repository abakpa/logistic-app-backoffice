import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
    fetchOrderRequest,
    fetchOrderSuccess,
    fetchOrderFailure,
    fetchOrderByUserRequest,
    fetchOrderByUserSuccess,
    fetchOrderByUserFailure,
    fetchOrderForPickupRequest,
    fetchOrderForPickupSuccess,
    fetchOrderForPickupFailure,
    fetchDriverOrderSuccess,
    fetchDriverOrderFailure,
    fetchDriverOrderRequest,
    createOrderRequest,
    createOrderSuccess,
    createOrderFailure,
    fetchOrderByIdRequest,
    fetchOrderByIdSuccess,
    fetchOrderByIdFailure
} from '../slices/orderSlice'

 function* fetchOrderSaga(){
    try {
    
        const response = yield call(axios.get, 'http://localhost:4000/api/orders')
        yield put(fetchOrderSuccess(response.data))
    } catch (error) {
        yield put(fetchOrderFailure(error.response.data.message))
    }
}
 function* fetchOrderByUserSaga(){
    try {
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.get, 'http://localhost:4000/api/orders/user',config)
        yield put(fetchOrderByUserSuccess(response.data))
    } catch (error) {
        yield put(fetchOrderByUserFailure(error.response.data.message))
    }
}
 function* fetchDriverOrderSaga(){
    try {
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.get, 'http://localhost:4000/api/orders/orderbydriver',config)
        yield put(fetchDriverOrderSuccess(response.data))
    } catch (error) {
        yield put(fetchDriverOrderFailure(error.response.data.message))
    }
}
 function* fetchOrderForPickupSaga(){
    try {
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.get, 'http://localhost:4000/api/orders/orderforpickup',config)
        yield put(fetchOrderForPickupSuccess(response.data))
    } catch (error) {
        yield put(fetchOrderForPickupFailure(error.response.data.message))
    }
}
function* createOrderSaga(action){
    const {details,navigate} = action.payload
    try {
      
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.post,'http://localhost:4000/api/orders', details,config);
        yield put(createOrderSuccess(response.data))
        navigate('/Order')
    } catch (error) {
        yield put(createOrderFailure(error.response.data.message))
    }
}
function* fetchOrderByIdSaga(action){
    const {orderId,navigate} = action.payload
   try {
       const token = localStorage.getItem('authToken');
       const config = {
           headers: {
               Authorization: `Bearer ${token}`
           }
       }
       const response = yield call(axios.get, `http://localhost:4000/api/orders/${orderId}`,{},config)
       yield put(fetchOrderByIdSuccess(response.data))
       navigate(`/singleorder/${orderId}`)
   } catch (error) {
       yield put(fetchOrderByIdFailure(error.response.data.message))
   }
}
function* orderSaga(){
    yield takeLatest(fetchOrderRequest.type, fetchOrderSaga)
    yield takeLatest(fetchDriverOrderRequest.type, fetchDriverOrderSaga)
    yield takeLatest(fetchOrderForPickupRequest.type, fetchOrderForPickupSaga)
    yield takeLatest(fetchOrderByUserRequest.type, fetchOrderByUserSaga)
    yield takeLatest(createOrderRequest.type, createOrderSaga)
    yield takeLatest(fetchOrderByIdRequest.type, fetchOrderByIdSaga)
}

export default orderSaga