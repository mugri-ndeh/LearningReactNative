import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from '../modules/auth/login/LoginSlice'
import registerSlice from '../modules/auth/sign_up/SignUpSlice'
import authSlice from '../modules/auth/AuthSlice'

const reducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    auth: authSlice
})
const store = configureStore({
    reducer
})

export default store