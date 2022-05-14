import { DATA } from "./Action";

const initialState = {
    data : [],
}
export const dataReducer = (store = initialState, {type, payload}) => {
    switch (type){
        case DATA:
            return {...store, data : payload}
        default:
            return store
    }
}