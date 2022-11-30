import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'universal-cookie';
import { BaseURL } from "../../common/constants";
const cookies = new Cookies();
const loginSlice = createSlice({
    name : 'login',
    initialState : {
        firstName : "",
        lastName : "",
        status : !cookies.get('token')  ? false : true,
        token :  cookies.get("token") || "",      
    },
    reducers : {
        setLoginInfo : (state, { payload }) => {
            state.firstName = payload.firstName;
            state.status = true;
            state.lastName  = payload.lastName;
            state.token = payload.token;
        },
        LogOut : (state, action) => {
            state.firstName = '';
            state.lastName = '';
            state.token = '';
            state.status = false;
            cookies.remove('token');
        }
    }
})

export const { setLoginInfo, LogOut } = loginSlice.actions;

export const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            const userData = await axios.post(`${BaseURL}/user/login`, {...data, method : "GET"});
            cookies.set('token', userData.data.token, { path: '/' });
            // console.log(cookies.get('token'));
            dispatch(setLoginInfo(userData.data));
        }
        catch (err) {
            return err.response.data.message;
        }
    }
}
export const apiCallSignIn = (data) =>{
    return async (dispatch) => {
        try {
            let req = await axios.post(`${BaseURL}/user/post`, data);
            console.log(req.data)
            // dispatch((req.data))
        }
        catch (err) {
            console.error(err)
        }
    }
}
export default loginSlice.reducer;