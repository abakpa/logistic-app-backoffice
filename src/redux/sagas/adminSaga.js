import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {
    fetchAdminsRequest,
    fetchAdminsSuccess,
    fetchAdminsFailure,
    createAdminRequest,
    createAdminSuccess,
    createAdminFailure
} from '../slices/adminSlice'

function* fetchAdminsSaga(){
    try {
        const response = yield call(axios.get, 'https://logistic-app-back-end.onrender.com/api/admin');
        yield put(fetchAdminsSuccess(response.data))
    } catch (error) {
        yield put(fetchAdminsFailure(error.response.data.message))
    }
}
function* createAdminSaga(action){
    const {details,navigate} = action.payload
    try {
        const response = yield call(axios.post,'https://logistic-app-back-end.onrender.com/api/admin', details);
        yield put(createAdminSuccess(response.data))
        navigate('/login')
    } catch (error) {
        yield put(createAdminFailure(error.message))
    }
}
function* adminSaga(){
    yield takeLatest(fetchAdminsRequest.type, fetchAdminsSaga)
    yield takeLatest(createAdminRequest.type, createAdminSaga)
}

export default adminSaga