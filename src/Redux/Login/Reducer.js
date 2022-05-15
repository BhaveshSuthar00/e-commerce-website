import { LOGIN, LOGOUT } from './Action';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const initialState = {
    firstName : "",
    lastName : "",
    status : !cookies.get('token')  ? false : true,
    token :  cookies.get("token") || "",
}
export const loginReducer = (store = initialState, { type, payload }) =>{
    switch(type){
        case LOGIN : 
            return {...store, firstName : payload.firstName, lastName : payload.lastName, status : true, token : payload};
        case LOGOUT : {
            console.log('here')
            cookies.remove("token", { path: "/" });
            return {...store, firstName : '', lastName : '', token : '', status : false};
        }
        default:
            return store;
    }
}