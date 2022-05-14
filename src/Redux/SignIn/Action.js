import axios from "axios"
import { userLoggedIn } from '../Login/Action'
const apiCallSignIn = (data) =>{
    return async (dispatch) => {
        try {
            let req = await axios.post('https://e-commerce-port.herokuapp.com/user/post', data);
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