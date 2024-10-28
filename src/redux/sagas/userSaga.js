import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, createUserRequest,createUserSuccess,createUserFailure} from '../slices/userSlice'

function* fetchUsersSaga(){
    try {
        const response = yield call(axios.get, 'http://localhost:4000/api/users')
        yield put(fetchUsersSuccess(response.data))
    } catch (error) {
        yield put(fetchUsersFailure(error.response.data.message))
    }
}
function* createUserSaga(action){
    const {details,navigate} = action.payload
    try {
        const response = yield call(axios.post,'http://localhost:4000/api/users', details);
        yield put(createUserSuccess(response.data))
        navigate('/Users')
    } catch (error) {
        yield put(createUserFailure(error.message))
    }
}
function* userSaga(){
    yield takeLatest(fetchUsersRequest.type, fetchUsersSaga)
    yield takeLatest(createUserRequest.type, createUserSaga)
}

export default userSaga