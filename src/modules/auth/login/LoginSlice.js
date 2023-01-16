import { firebase } from '@react-native-firebase/auth'
import { firestore } from '@react-native-firebase/firestore'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    user: {
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
    },
    error: ''
}
const auth = firebase.auth()


const login = createAsyncThunk('login', (user) => {
    auth.signInWithEmailAndPassword(user.email, user.password).then(async val => {
        const user = await firebase.firestore().collection('users').doc(val.user.uid).get()

    })
})

export const loginSlice = createSlice({
    name: 'login',
    initialState,

    extraReducers: builder => {
        builder.addCase(login.pending, state => { state.loading = true })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(login.rejected, state => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

// Action creators are generated for each case reducer function
export const loginMethod = login

export default loginSlice.reducer