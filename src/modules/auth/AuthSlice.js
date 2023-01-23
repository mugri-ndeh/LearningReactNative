import auth from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';

const initialState = {
    isLoggedIn: false,
    user: {},
    isLoading: false
}

export const checkAuth = checkAuthState = createAsyncThunk('user/checkAuth', async (thunkAPI) => {
    try {
        if (auth().currentUser === null) {
            return { isLoggedIn: false, user: null }
        }
        const new_user = await firestore().collection('users').doc(auth().currentUser.uid).get()
        return { isLoggedIn: true, user: new_user.data() };
    }
    catch (e) {
        console.log('an errror occured here')
        console.log(e)
        return thunkAPI.rejectWithValue(e.message)
    }

})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            auth().signOut().then(() => {
                state.isLoggedIn = false
                state.isLoading = false
            })

        },

    },
    extraReducers: builder => {
        builder.addCase(checkAuthState.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };

        })
        builder.addCase(checkAuthState.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isLoggedIn: action.payload.isLoggedIn, user: action.payload.user };


        })
        builder.addCase(checkAuthState.rejected, (state, action) => {
            return {
                ...state, loading: false, error: action.payload, isError: true,
                isSuccess: false,
            };


        })
    }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer