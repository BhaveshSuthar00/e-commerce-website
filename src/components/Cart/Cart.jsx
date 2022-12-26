import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, removeProduct } from '../../Redux/Cart/Cart';
import { Card } from './Card';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const deleteFun = (id) => {
        dispatch(removeProduct(id));
    }
    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);
    if(cart.length === 0){
        return (
            <Box display={'flex'} justifyContent='cneter' margin={'auto'}>
                
                <Text as={Link} to={'/'} ml='auto' mr={'auto'} mt={4} fontSize='3xl'>
                    Go back to shopping...
                </Text>
            </Box>
        )
    }
    return (
        <>
            <Box w='50%' margin={'auto'} display='flex'>
                <Box flex={1.2}>
                    {cart && cart.map((item) => <Card {...item} deleteFun={deleteFun} key={uuid()} />)}
                </Box>
                <Box flex={0.8} h="70vh">
                    <Box ml={3}>
                        <Text>
                            Gif Card
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Cart