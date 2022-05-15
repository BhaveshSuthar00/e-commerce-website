import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const LOGIN = "LOGIN"; 

const LOGOUT = "LOGOUT";

const userLoggedIn = (data) => ({type : LOGIN, payload : data});

const userLoggedOut = () => ({type : LOGOUT});

const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            console.log(data);
            const startUrl = 'https://e-commerce-port.herokuapp.com'
            const userData = await axios.post(`${startUrl}/user/login`, {...data, method : "GET"});
            console.log(userData);
            cookies.set('token', userData.data.token, { path: '/' });
            console.log(cookies.get('token'));
            // const ud = await axios.post(`${startUrl}/user`, {
            //     method : "GET",
            //     cookie : `token=${userData.data.token}`
            // })
        }
        catch (err) {

        }
    }
}

export {
    LOGIN, LOGOUT,userLoggedIn,userLoggedOut,
    apiCallLoggedIn
}