import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

import {
    fetchDispatchRequest,
    fetchDispatchSuccess,
    fetchDispatchFailure,
    fetchActiveDispatchRequest,
    fetchActiveDispatchSuccess,
    fetchActiveDispatchFailure,
    fetchDispatchByDriverRequest,
    fetchDispatchByDriverSuccess,
    fetchDispatchByDriverFailure,
    createDispatchByDriverRequest,
    createDispatchByDriverSuccess,
    createDispatchByDriverFailure,
    createDispatchRequest,
    createDispatchSuccess,
    createDispatchFailure
} from '../slices/dispatchSlice'
import io from 'socket.io-client'
import { fetchNotificationSuccess } from '../slices/notification'
const socket = io.connect('http://localhost:4000')

 function* fetchDispatchSaga(){
    try {
       
        const response = yield call(axios.get, 'http://localhost:4000/api/dispatch')
        yield put(fetchDispatchSuccess(response.data))
    } catch (error) {
        yield put(fetchDispatchFailure(error.response.data.message))
    }
}
 function* fetchActiveDispatchSaga(){
    try {
       
        const response = yield call(axios.get, 'http://localhost:4000/api/dispatch/active')
        yield put(fetchActiveDispatchSuccess(response.data))
    } catch (error) {
        yield put(fetchActiveDispatchFailure(error.response.data.message))
    }
}
function* fetchDispatchByDriverSaga(){
    // const {orderId,navigate} = action.payload
    // const {orderId} = action.payload
    try {
      
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.get,'http://localhost:4000/api/dispatch/driver',config);
        yield put(fetchDispatchByDriverSuccess(response.data))
        // navigate('/OrderByDriver')
    } catch (error) {
        yield put(fetchDispatchByDriverFailure(error.response.data.message))
    }
}
function* createDispatchByDriverSaga(action){
    const {orderId,navigate} = action.payload
    try {
      
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.put,`http://localhost:4000/api/orders/dispatch/${orderId}`,{},config);
        console.log('response 1',response.data)

        if(!response.data.status) return yield put(fetchNotificationSuccess(response.data))
        socket.emit('send_message',{message:response.data.status})
        yield put(createDispatchByDriverSuccess(response.data))
        if(response.data._id){
        navigate('/OrderByDriver')
        }
    } catch (error) {
        yield put(createDispatchByDriverFailure(error.response.data.message))
    }
}
function* createDispatchSaga(action){
    // const {orderId,navigate} = action.payload
    const {orderId} = action.payload
    try {
      
        const token = localStorage.getItem('authToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = yield call(axios.put,`http://localhost:4000/api/dispatch/status/${orderId}`,{},config);
        yield put(createDispatchSuccess(response.data))
        // navigate('/OrderByDriver')
    } catch (error) {
        yield put(createDispatchFailure(error.response.data.message))
    }
}

function* dispatchSaga(){
    yield takeLatest(fetchDispatchRequest.type, fetchDispatchSaga)
    yield takeLatest(fetchActiveDispatchRequest.type, fetchActiveDispatchSaga)
    yield takeLatest(fetchDispatchByDriverRequest.type, fetchDispatchByDriverSaga)
    yield takeLatest(createDispatchRequest.type, createDispatchSaga)
    yield takeLatest(createDispatchByDriverRequest.type, createDispatchByDriverSaga)
}

export default dispatchSaga