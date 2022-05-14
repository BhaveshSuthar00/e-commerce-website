import { Flex, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiCallGetData } from '../../Redux/Data/Action'
import Ma from './Card'

const Home = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((store)=> store.Data);
    useEffect(()=>{
        dispatch(apiCallGetData())
    },[])
    return (
        <Flex
        bg={'pink.300'}
        // bg={useColorModeValue("#F9FAFB", "gray.600")}   
        maxW='full' flexWrap='wrap' mt={5} alignItems='center' justifyContent='center'>
            {
                data && data.map((product, index) =>(
                    <Ma {...product} key={product._id}/>
                ))
            }
        </Flex>
    )
}

export default Home