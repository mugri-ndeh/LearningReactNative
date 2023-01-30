import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getFavourites = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favourites')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
}

export const checkFav = check = createAsyncThunk('favourites/check', async (_, thunkAPI) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@favourites')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

export const addFavourite = add = createAsyncThunk('favourites/add', async (product, thunkAPI) => {
    try {
        const favList = await getFavourites()
        favList.push(product)
        const jsonValue = JSON.stringify(favList)
        await AsyncStorage.setItem('@favourites', jsonValue)
        return favList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

export const removeFavourite = remove = createAsyncThunk('favourites/remove', async (product, thunkAPI) => {
    try {
        const favList = await getFavourites()
        const newList = favList.filter(val => val.name !== product.name)
        const jsonValue = JSON.stringify(newList)
        await AsyncStorage.setItem('@favourites', jsonValue)
        return newList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

const initialState = {
    favourites: [],
    isLoading: false,
    isError: false,
    error: ''
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(add.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };

        })
        builder.addCase(add.fulfilled, (state, action) => {
            console.log(state)
            return { ...state, isLoading: false, isError: false, favourites: action.payload };
        })
        builder.addCase(add.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true,
            };
        })

        builder.addCase(remove.pending, state => {
            return { ...state, isLoading: true };
        })
        builder.addCase(remove.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, favourites: action.payload };
        })
        builder.addCase(remove.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true,
            };
        })

        builder.addCase(check.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };
        })
        builder.addCase(check.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, favourites: action.payload };
        })
        builder.addCase(check.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true, favourites: []
            };
        })
    }
})

export default favouritesSlice.reducer
export const { } = favouritesSlice.actions