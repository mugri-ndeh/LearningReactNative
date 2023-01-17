import auth from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';

const initialState = {
    loading: false,
    user: {
        username: '',
        email: '',
    },
    error: '',
    isError: false,
    isSuccess: false,
}


export const loginMethod = login = createAsyncThunk('user/login', async (user, thunkAPI) => {
    try {
        (await auth().signInWithEmailAndPassword(user.email, user.password))

        // const new_user = await firestore().collection('users').doc(userId).get();
        return { user: '' }
    }
    catch (e) {
        console.log('an errror occured here')
        console.log(e)
        return thunkAPI.rejectWithValue(e.message)
    }

})

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false
        },

    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            // state.loading = true
            return { ...state, loading: true };

        })
        builder.addCase(login.fulfilled, (state, action) => {
            // state.loading = false
            // state.user = action.payload
            // state.error = ''
            console.log('OK to go')

            return { ...state, loading: false, error: 'none' };


        })
        builder.addCase(login.rejected, (state, action) => {
            // state.loading = false
            // state.error = action.payload
            return { ...state, loading: false, error: action.payload };


        })
    }
})

// Action creators are generated for each case reducer function
export const { reset } = loginSlice.actions;

export default loginSlice.reducer