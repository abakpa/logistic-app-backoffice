import {all} from 'redux-saga/effects'
import authSaga from './authSaga'
import userSaga from './userSaga'
import adminSaga from './adminSaga'
import vehicleSaga from './vehicleSaga'
import driverSaga from './driverSaga'
import orderSaga from './orderSaga'
import dispatchSaga from './dispatchSaga'

export default function* rootSaga(){
    yield all([authSaga(), userSaga(), adminSaga(),vehicleSaga(),driverSaga(),orderSaga(),dispatchSaga()])
}