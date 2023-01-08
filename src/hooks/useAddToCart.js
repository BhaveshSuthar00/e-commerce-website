import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/Cart/Cart";
import { apiCallCart } from "../Redux/Data/Data";

const useAddToCart = () => {
    const [success, setSuccess] = useState(false);
    const { loading } = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const { token } = useSelector(store => store.login);
    const getData = (productId) => {
        if(!token) return false;
        else {
            dispatch(setLoading(true));
            dispatch(apiCallCart(productId)).then(() => setSuccess(true));
        }
    }
    return [success, loading, getData];
}

export default useAddToCart;