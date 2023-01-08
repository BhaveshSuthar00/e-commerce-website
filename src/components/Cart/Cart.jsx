import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, removeProduct, setLoading } from '../../Redux/Cart/Cart';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import Ma from '../Product/Card';
import { apiCallGetData } from '../../Redux/Data/Data';

const Cart = () => {
    const { cart, loading } = useSelector(store => store.cart);
    const { data } = useSelector(store => store.data);
    const dispatch = useDispatch();
    const deleteFun = (id) => dispatch(removeProduct(id));
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(fetchCart());
        if(data.length === 0) {
            dispatch(apiCallGetData('t-shirt'));
        }
    }, [dispatch]);

    if(loading) {
        return (
            <Center>
                <Text>Loading....</Text>
            </Center>
        )
    }
    if(cart.length === 0 && loading === false){
        return (
            <Box display={'flex'} justifyContent='center' margin={'auto'}>
                
                <Text as={Link} to={'/'} ml='auto' mr={'auto'} mt={4} fontSize='3xl'>
                    Go back to shopping...
                </Text>
            </Box>
        )
    }
    return (
        <>
            <Box w='50%' margin={'auto'} display='flex'>
                <Box w={"60%"}>
                    {cart && cart.map((item) => <Card {...item} deleteFun={deleteFun} key={uuid()} />)}
                </Box>
                <Box w={"40%"} h="70vh">
                    <Box ml={3}>
                        <Text>
                            Gif Card
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} gap={5} maxW={'60%'} m='auto' flexWrap={'wrap'}>
                {data && data.map((product) => <Ma {...product} widthFor='16%' fontSize='sm' page='cart' key={product._id} />)}
            </Box>
        </>
    )
}

export default Cart