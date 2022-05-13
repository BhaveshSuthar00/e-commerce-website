import axios from "axios";

const LOGIN = "LOGIN"; 

const LOGOUT = "LOGOUT";

const userLoggedIn = (data) => ({type : LOGIN, payload : data});

const userLoggedOut = (data) => ({type : LOGOUT, payload : data});

const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            const userData = await axios.get('https://e-commerce-port.herokuapp.com/user/login', data);
            console.log(userData);
        }
        catch (err) {

        }
    }
}

export {
    LOGIN, LOGOUT,
    apiCallLoggedIn
}