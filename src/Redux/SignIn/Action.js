import axios from "axios"
import { BaseURL } from "../../common/constants";
import { userLoggedIn } from '../Login/Action'
const apiCallSignIn = (data) =>{
    return async (dispatch) => {
        try {
            let req = await axios.post(`${BaseURL}/user/post`, data);
            console.log(req.data)
            dispatch(userLoggedIn(req.data))
        }
        catch (err) {
            console.error(err)
        }
    }
}
export {
    apiCallSignIn
}