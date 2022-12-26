import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { BaseURL, setHeaderToken } from "../../common/constants";

const cookie = new Cookies();
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    try {
        const AUTH_TOKEN = cookie.get('token');
        setHeaderToken(AUTH_TOKEN);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
        // console.log(axios.defaults.headers.common);
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
        },
        emptyTheCart : (state, { payload }) => {
            state.cart = [];
            state.loading = false;
            state.isError = false;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            // console.log(payload, 'paylaod');
            state.cart = payload.productId;
        })
    }
})

export const { setCart, emptyTheCart } = cartSlice.actions;

export const getCartApi = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BaseURL}/cart`);
        console.log(response.data);
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
        console.log(newList);
        await axios.patch(`${BaseURL}/cart/${id}`);
        dispatch(setCart(newList));
    }
    catch (err) {
        throw new Error(err);
    }
}

export default cartSlice.reducer;