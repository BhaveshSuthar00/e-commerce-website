import axios from "axios";
const LOGIN = "LOGIN"; 

const LOGOUT = "LOGOUT";

const userLoggedIn = (data) => ({type : LOGIN, payload : data});

const userLoggedOut = (data) => ({type : LOGOUT, payload : data});

const apiCallLoggedIn = (data) =>{
    return async (dispatch) => {
        try {
            console.log(data);
            const startUrl = 'https://e-commerce-port.herokuapp.com'
            const userData = await axios.post(`${startUrl}/user/login`, {...data, method : "GET"});
            console.log(userData);
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