import axios from "axios";
axios.defaults.withCredentials = true;
const LOGIN = "LOGIN"; 

const LOGOUT = "LOGOUT";

const userLoggedIn = (data) => ({type : LOGIN, payload : data});

const userLoggedOut = (data) => ({type : LOGOUT, payload : data});

const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            console.log(data);
            const startUrl = 'https://e-commerce-port.herokuapp.com'
            // const startUrl = 'http://localhost:2200'
            const userData = await axios.post(`${startUrl}/user/login`, {...data, method : "GET"});
            console.log(userData);
            const ud = await axios.post(`${startUrl}/user`, {
                // withCredentials : true, 
                method : "GET"
            })
            console.log(ud);
        }
        catch (err) {

        }
    }
}

export {
    LOGIN, LOGOUT,
    apiCallLoggedIn
}