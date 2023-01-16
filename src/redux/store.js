import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../modules/auth/login/LoginSlice'

const store = configureStore({
    reducer: {
        auth: loginSlice
    },
})

export default store