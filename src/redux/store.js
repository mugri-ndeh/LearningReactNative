import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from '../modules/auth/login/LoginSlice'
import registerSlice from '../modules/auth/sign_up/SignUpSlice'

const reducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
})
const store = configureStore({
    reducer
})

export default store