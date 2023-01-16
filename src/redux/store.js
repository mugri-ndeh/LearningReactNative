import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../modules/home/counter'
import { authSlice } from './reducers/auth'

const store = configureStore({
    reducer: {
        auth: authSlice
    },
})

export default store