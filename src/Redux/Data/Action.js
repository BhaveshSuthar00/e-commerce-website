import axios from "axios";
import { BaseURL } from "../../common/constants";

const DATA = "DATA";

const SetData = data => ({ type: DATA, payload: data });

const apiCallGetData = value => {
    return async dispatch => {
        try {
            console.log(value);
            let req = await axios.get(`${BaseURL}/product/getAll?category=${value}`);
            // let req2 = await axios.get(`${BaseURL}/product/all`);
            dispatch(SetData(req.data));
        } catch (err) {
            console.log(err.message);
        }
    };
};
export { apiCallGetData, SetData, DATA };
