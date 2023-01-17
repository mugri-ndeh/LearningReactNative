import auth from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore';
import 'firebase/firestore';

const initialState = {
    loading: false,
    user: {
        username: '',
        email: '',
        password: '',
    },
    error: ''
}


export const registerMethod = register = createAsyncThunk('user/register', async (user, thunkAPI) => {
    try {
        const user_id = (await auth().createUserWithEmailAndPassword(user.email, user.password)).user.uid;
        const new_user = await firestore().collection('users').doc(user_id).set(user);
        return user;
    }
    catch (e) {
        console.log('an errror occured here')
        console.log(e)
        return thunkAPI.rejectWithValue(e.message)
    }

})

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        reset: (state) => {
            return {
                ...state,
                loading: false,
                error: '',
                user: {
                    username: '',
                    email: '',
                    password: '',
                }
            }

        },

    },
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            return { ...state, loading: true };
        })
        builder.addCase(register.fulfilled, (state, action) => {
            return { ...state, loading: false, error: 'none' };
        })
        builder.addCase(register.rejected, (state, action) => {
            return { ...state, loading: false, error: action.payload };


        })
    }
})

// Action creators are generated for each case reducer function
export const { reset } = registerSlice.actions;

export default registerSlice.reducer