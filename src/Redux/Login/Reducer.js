import { LOGIN, LOGOUT } from './Action';

const initialState = {
    firstName : "",
    lastName : "",
    token : "",
}
export const loginReducer = (store = initialState, { type, payload }) =>{
    switch(type){
        case LOGIN : 
            return {...store, firstName : payload.firstName, lastName : payload.lastName, token : payload};
        case LOGOUT : 
            return {...store, firstName : '', lastName : '', token : ''};
        default:
            return store;
    }
}