import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getCartItems = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@cart')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
}

export const checkCart = checkC = createAsyncThunk('cart/check', async (_, thunkAPI) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@cart')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})



export const addCart = addC = createAsyncThunk('cart/add', async (product, thunkAPI) => {
    try {
        const cartList = await getCartItems()
        cartList.push({ ...product, qty: 1 })
        const jsonValue = JSON.stringify(cartList)
        await AsyncStorage.setItem('@cart', jsonValue)

        return cartList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

export const addCartQty = addQty = createAsyncThunk('cart/addQty', async (product, thunkAPI) => {
    try {
        const cartList = await getCartItems()

        for (var i in cartList) {
            if (cartList[i].name === product.name) {
                cartList[i].qty = cartList[i].qty + 1;
                break; //Stop this loop, we found it!
            }
        }
        const jsonValue = JSON.stringify(cartList)
        await AsyncStorage.setItem('@cart', jsonValue)
        return cartList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

export const reduceCartQty = reduceQty = createAsyncThunk('cart/reduceQty', async (product, thunkAPI) => {
    try {
        const cartList = await getCartItems()

        for (var i in cartList) {
            if (cartList[i].name === product.name) {
                if (cartList[i].qty > 1) {
                    cartList[i].qty = cartList[i].qty - 1;
                    break; //Stop this loop, we found it!
                }
            }
        }
        const jsonValue = JSON.stringify(cartList)
        await AsyncStorage.setItem('@cart', jsonValue)
        return cartList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

export const removeCart = removeC = createAsyncThunk('cart/remove', async (product, thunkAPI) => {
    try {
        const cartList = await getCartItems()
        const newList = cartList.filter(val => val.image !== product.image)
        const jsonValue = JSON.stringify(newList)
        await AsyncStorage.setItem('@cart', jsonValue)
        return newList
    } catch (e) {
        thunkAPI.rejectWithValue('An error occured: Please try again')
    }
})

const initialState = {
    cart: [],
    isLoading: false,
    isError: false,
    error: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addC.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };

        })
        builder.addCase(addC.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, cart: action.payload };
        })
        builder.addCase(addC.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true,
            };
        })

        builder.addCase(removeC.pending, state => {
            return { ...state, isLoading: true };
        })
        builder.addCase(removeC.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, cart: action.payload };
        })
        builder.addCase(removeC.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true,
            };
        })

        builder.addCase(checkC.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };
        })
        builder.addCase(checkC.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, cart: action.payload };
        })
        builder.addCase(checkC.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true, cart: []
            };
        })

        // add qty

        builder.addCase(addQty.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };
        })
        builder.addCase(addQty.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, cart: action.payload };
        })
        builder.addCase(addQty.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true, cart: []
            };
        })

        //remove qty

        builder.addCase(reduceQty.pending, state => {
            // state.loading = true
            return { ...state, isLoading: true };
        })
        builder.addCase(reduceQty.fulfilled, (state, action) => {
            return { ...state, isLoading: false, isError: false, cart: action.payload };
        })
        builder.addCase(reduceQty.rejected, (state, action) => {
            return {
                ...state, isLoading: false, error: action.payload, isError: true, cart: []
            };
        })
    }
})

export default cartSlice.reducer
export const { } = cartSlice.actions