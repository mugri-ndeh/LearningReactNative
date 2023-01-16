import { firebase } from '@react-native-firebase/auth';
import { createSlice } from '@reduxjs/toolkit'

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
// const fireStore = firebase.firestore()

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state) => {
            state.loading = true;
            auth.signInWithEmailAndPassword(state.username, state.password).then(() => {
                console.log('logged in')
            }).catch((e) => {
                console.log(e)
                state.error = e;
            })
            state.loading = false;
        },
        signUp: (state) => {
            state.loading = true;
            auth.createUserWithEmailAndPassword(state.username, state.password).then(async () => {
                await fireStore.collection('users').add({ ...user, password: '' })
                console.log('logged in')
            }).catch((e) => {
                console.log(e)
            })
            state.loading = false;
        },

        logout: async (state) => {
            await auth.signOut()
        }

    },
})

// Action creators are generated for each case reducer function
export const { login, signUp } = authSlice.actions

export default authSlice.reducer