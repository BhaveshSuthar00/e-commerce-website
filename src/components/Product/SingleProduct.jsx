import { Box, Button, ButtonGroup, Flex, Icon, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BaseURL } from '../../common/constants';
import { ProductImg } from './ProductImg';
import  { HiShoppingBag } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai';
const SingleProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const getData = async() => {
        try {
            setLoading(true);
            const response = await axios.get(`${BaseURL}/product/${id}`);
            // console.log(response.data);
            setData(response.data);
            setLoading(false);
        }
        catch (err) {}
    }
    useEffect(()=> {
        getData();
    }, [])
    if(loading) return <></>;
    return (
        <Box w={'90%'} m='auto' display='flex' mt={4}>
            <Flex flex={1}  wrap={'wrap'}>
                <ProductImg images={data.image}/>
            </Flex>
            <Box flex={1}>
                <Box ml={8} w='full'>

                    <Text fontSize={'3xl'} fontWeight='bold' >
                        {data.productName}
                    </Text>
                    <Text fontSize={'xl'} mt={3} mb={3} color='gray'>
                        {data.brand}
                    </Text>
                    <Button>
                        {data.rating ? data.rating : 4.4} Ratings
                    </Button>
                    <hr style={{marginTop : "2%", marginBottom : "1%" }}/>
                    <Text fontSize={'2xl'}>
                        <Text as='span' fontWeight={'bold'}>&#8377;{Math.floor(data.price * data.discount / 100)}</Text> <Text as='span' color='gray'>MRP  </Text> <Text as='span' color={'gray.400'} textDecor='line-through'>&#8377;{data.price}</Text> <Text color='orange.400' as='span' fontWeight={'bold'}> ( {data.discount}% OFF)</Text>
                    </Text>
                    <Text color={'green.400'} fontSize='sm' fontWeight='bold' mt={2}>
                        inclusive of all taxes
                    </Text>
                    <ButtonGroup mt={3} size='lg' spacing={5}>
                        <Button 
                            bgColor={'#ff3e6c'} 
                            _hover={{bgColor : "#ff3e6c"}} 
                            _focus={{outline : 0, bgColor : "#ff3e6c"}} 
                            _active={{bgColor : "#ff3e6c"}} 
                            color='white' 
                            fontSize={'2xl'}  borderRadius={0}
                        >
                            <Icon as={HiShoppingBag} mr={2}/>
                            Add to Bag
                        </Button>
                        <Button variant='outline' textColor='black' 
                            borderRadius={0} bgColor={'transparent'} 
                            _hover={{bgColor : "transparent", border : '1px solid'}} 
                            _focus={{outline : 0, bgColor : "transparent"}} 
                            _active={{bgColor : "transparent"}}
                        >
                            <Icon as={AiOutlineHeart} mr={2}/>
                            WishList
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    )
}

export default SingleProduct