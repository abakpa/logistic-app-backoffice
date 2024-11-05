import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
    loginRequest, 
    loginSuccess, 
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure
} from '../slices/authSlice';

function* loginSaga(action){
    const {credentials,navigate} = action.payload
    try {
        const response = yield call(axios.post,'https://logistic-app-back-end.onrender.com/api/login/admin', credentials);
        const { token,admin } = response.data;
        localStorage.setItem('authToken', token);
        localStorage.setItem('adminId', admin.id);
        localStorage.setItem('adminEmail', admin.email);
        yield put(loginSuccess(response.data))
        navigate('/home')
    } catch (error) {
        yield put(loginFailure(error.message))
    }
}
function* logoutSaga(action){
    const { navigate } = action.payload;
    try {
        // Clear user data from local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('adminId');
        localStorage.removeItem('adminEmail');
        navigate('/login');

        // Dispatch logout success action
        yield put(logoutSuccess());

        // Navigate to login page
    } catch (error) {
        yield put(logoutFailure(error.message));
    }
}

function* authSaga(){
    yield takeLatest(loginRequest.type, loginSaga)
    yield takeLatest(logoutRequest.type, logoutSaga)
}

export default authSaga;