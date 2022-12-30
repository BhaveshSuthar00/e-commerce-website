import { Button, ButtonGroup, Icon } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { apiCallCart } from "../../Redux/Data/Data";

export const ButtonS = ({BagIcon, WishListBag, productId}) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.data);
    const { token } = useSelector(store => store.login);
    const navigate = useNavigate();
    const addingItem = () => {
        if(token) dispatch(apiCallCart(productId));
        else navigate('/login')
    }
    return (
        <>
            
            <ButtonGroup mt={3} size='lg' spacing={5}>
                <Button
                    bgColor={'#ff3e6c'} 
                    _hover={{bgColor : "#ff3e6c"}} 
                    _focus={{outline : 0, bgColor : "#ff3e6c"}} 
                    _active={{bgColor : "#ff3e6c"}} 
                    color='white' 
                    isLoading={loading}
                    isDisabled={token !== '' ? false : true}
                    fontSize={'2xl'}  borderRadius={0}
                    onClick={addingItem}
                    >
                    <Icon as={BagIcon} mr={2}/>
                    Add to Bag
                </Button>
                <Button variant='outline' textColor='black' 
                    borderRadius={0} bgColor={'transparent'} 
                    isDisabled={token !== '' ? false : true}
                    _hover={{bgColor : "transparent", border : '1px solid'}} 
                    _focus={{outline : 0, bgColor : "transparent"}} 
                    _active={{bgColor : "transparent"}}
                >
                    <Icon as={WishListBag} mr={2}/>
                    WishList
                </Button>
            </ButtonGroup>
        </>
    )
}