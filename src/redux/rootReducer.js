import {combineReducers} from 'redux';
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import adminReducer from './slices/adminSlice'
import vehicleReducer from './slices/vehicleSlice'
import driverReducer from './slices/driverSlice'
import orderReducer from './slices/orderSlice'
import dispatchReducer from './slices/dispatchSlice'
import notificationReducer from './slices/notification';

const rootReducer = combineReducers({
    auth: authReducer,
    notification:notificationReducer,
    users: userReducer,
    admin: adminReducer,
    vehicle:vehicleReducer,
    driver:driverReducer,
    order:orderReducer,
    dispatch:dispatchReducer
});

export default rootReducer;