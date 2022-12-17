import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../common/constants";

const DataSlice = createSlice({
    name : 'Data',
    initialState : {
        data: [],
        product : {},
        loading : false,
    },
    reducers : {
        setProductData : (state, { payload }) => {
            state.data = payload.product;
        },
        setAdded : (state, { payload }) => {
            state.product = payload;
        },
        setLoading : (state, { payload }) => {
            state.loading = payload;
        }
    }
})

export const { setProductData, setAdded, setLoading } = DataSlice.actions;

export const apiCallGetData = value =>  async (dispatch) => {
    try {
        const req = await axios.get(`${BaseURL}/product/getAll?category=${value}`);
        dispatch(setProductData(req.data));
    } catch (err) {
        console.log(err);
    }
};

export const apiCallCart = (productId) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const req = await axios.post(`${BaseURL}/cart/post`, { productId : productId });
        dispatch(setAdded(req.data));
        dispatch(setLoading(false));
    }
    catch (err) {
        console.log(err);
    }
} 
export default DataSlice.reducer;