import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { BaseURL, setHeaderToken } from "../../common/constants";

const cookie = new Cookies();
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    try {
        const AUTH_TOKEN = cookie.get('token');
        setHeaderToken(AUTH_TOKEN);
        const response = await axios.get(`${BaseURL}/cart`);
        return response.data;
    }
    catch (e) {
        throw new Error(e);
    }
})
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
        loading : false,
        isError : false,
    },
    reducers : {
        setCart : (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
            state.isError = false;
        },
        emptyTheCart : (state, { payload }) => {
            state.cart = [];
            state.loading = false;
            state.isError = false;
        },
        setError : (state, { payload }) => {
            state.isError = payload;
        },
        setLoading : (state, { payload }) => {
            state.loading = payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            state.cart = payload.productId;
            state.loading = false;
        })
    }
})

export const { setCart, emptyTheCart, setError, setLoading } = cartSlice.actions;

export const getCartApi = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${BaseURL}/cart`);
        dispatch(setCart(response.data));
    }
    catch (err) {
        throw new Error(err.response.data.message);
    }
}

export const removeProduct = (id) => async (dispatch, getState) => {
    try {
        const { cart } = getState().cart;
        let newList = cart.filter(item => item._id !== id);
        await axios.patch(`${BaseURL}/cart/${id}`);
        dispatch(setCart(newList));
    }
    catch (err) {
        throw new Error(err.response.data.message);
    }
}

export default cartSlice.reducer;