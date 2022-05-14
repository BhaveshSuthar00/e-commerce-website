import axios from "axios";

const DATA = "DATA";

const SetData = (data)=> ({type : DATA , payload : data});

const apiCallGetData = ()=>{
    return async (dispatch)=>{
        try {
            let req = await axios.get('https://e-commerce-port.herokuapp.com/product/getAll');
            dispatch(SetData(req.data));
        }
        catch(err) {
            console.log(err.message);
        }
    }
}
export {
    apiCallGetData, SetData, DATA
}