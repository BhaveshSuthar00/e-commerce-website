import axios from "axios";
import Cookies from 'universal-cookie';
import { BaseURL } from "../../common/constants";
const cookies = new Cookies();

const LOGIN = "LOGIN"; 

const LOGOUT = "LOGOUT";

const userLoggedIn = (data) => ({type : LOGIN, payload : data});

const userLoggedOut = () => ({type : LOGOUT});

const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            const userData = await axios.post(`${BaseURL}/user/login`, {...data, method : "GET"});
            console.log(userData);
            cookies.set('token', userData.data.token, { path: '/' });
            console.log(cookies.get('token'));
            // const ud = await axios.post(`${startUrl}/user`, {
            //     method : "GET",
            //     cookie : `token=${userData.data.token}`
            // })
        }
        catch (err) {
            return err.response.data.message;
        }
    }
}

export {
    LOGIN, LOGOUT,userLoggedIn,userLoggedOut,
    apiCallLoggedIn
}