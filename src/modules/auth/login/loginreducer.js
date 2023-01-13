import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    user: {},

}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.loading = true;
            state.user = {
                name: 'Chrome',
                age: 22,
                email: 'mugrindeh@gmail.com'
            }

            state.loading = false;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer