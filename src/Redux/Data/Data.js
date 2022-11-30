import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../common/constants";

const DataSlice = createSlice({
    name : 'Data',
    initialState : {
        data: [],
        category: [],
        brand: [],
        discount: [],
        color: [],
        searchCateegory: ""
    },
    reducers : {
        setProductData : (state, { payload }) => {
            state.data = payload.product;
            state.category = payload.category;
            state.brand = payload.brand;
            state.discount = payload.discount;
        }
    }
})

export const { setProductData } = DataSlice.actions;

export const apiCallGetData = value => {
    return async dispatch => {
        try {
            console.log(value);
            let req = await axios.get(`${BaseURL}/product/getAll?category=${value}`);
            // let req2 = await axios.get(`${BaseURL}/product/all`);
            dispatch(setProductData(req.data));
        } catch (err) {
            console.log(err.message);
        }
    };
};
export default DataSlice.reducer;