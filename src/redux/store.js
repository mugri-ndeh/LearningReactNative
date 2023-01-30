import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from '../modules/auth/login/LoginSlice'
import registerSlice from '../modules/auth/sign_up/SignUpSlice'
import authSlice from '../modules/auth/AuthSlice'
import favourites from './reducers/favourites'
import cart from './reducers/cart'

const reducer = combineReducers({
    login: loginSlice,
    register: registerSlice,
    auth: authSlice,
    favourites: favourites,
    cart: cart
})
const store = configureStore({
    reducer
})

export default store