import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../modules/home/counter'

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

export default store