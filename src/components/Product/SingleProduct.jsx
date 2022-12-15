import { Box, Button, ButtonGroup, Flex, Icon, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BaseURL } from '../../common/constants';
import { ProductImg } from './ProductImg';
import  { HiShoppingBag } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai';
import { ProductList } from './ProductList';
import LargeWithAppLinksAndSocial from '../Footer/Footer';
import { ProductExtra } from './ProductExtra';
import { useSelector } from 'react-redux';
import Ma from './Card';
const SingleProduct = () => {
    const { id } = useParams();
    const [singleData, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { data } = useSelector((store) => store.Data);
    const getData = async() => {
        try {
            setLoading(true);
            const response = await axios.get(`${BaseURL}/product/${id}`);
            setData(response.data);
            setLoading(false);
        }
        catch (err) {}
    }
    useEffect(()=> {
        getData();
    }, [id])
    if(loading) return <></>;
    return (
        <>
            <Box w={'90%'} m='auto' display='flex' mt={4}>
                <Flex flex={1}  wrap={'wrap'}>
                    <ProductImg images={singleData.image}/>
                </Flex>
                <Box flex={1}>
                    <Box ml={8} w='full'>
                        <Text fontSize={'3xl'} fontWeight='bold' >
                            {singleData.productName}
                        </Text>
                        <Text fontSize={'xl'} mt={3} mb={3} color='gray'>
                            {singleData.brand}
                        </Text>
                        <Button>
                            {singleData.rating ? singleData.rating : 4.4} Ratings
                        </Button>
                        <hr style={{marginTop : "2%", marginBottom : "1%" }}/>
                        <Text fontSize={'2xl'}>
                            <Text as='span' fontWeight={'bold'}>&#8377;{Math.floor(singleData.price * singleData.discount / 100)}</Text> <Text as='span' color='gray'>MRP  </Text> <Text as='span' color={'gray.400'} textDecor='line-through'>&#8377;{singleData.price}</Text> <Text color='orange.400' as='span' fontWeight={'bold'}> ( {singleData.discount}% OFF)</Text>
                        </Text>
                        <Text color={'green.400'} fontSize='sm' fontWeight='bold' mt={2}>inclusive of all taxes</Text>
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
                        <ProductList header={"Product Details"} list={['Black Tshirt for men','Solid','Regular length','Polo collar','Short, regular sleeves','Knitted cotton fabric']}/>
                        <ProductList header={"Size & Fit"} list={["Fit: Slim Fit", "Size worn by the model: M", "Chest: 41","Height: 6'1"]} />
                        <ProductList header={"Material & Care"} list={['Gentle Wash Only']} />
                        <ProductExtra />
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} gap={10} maxW={'100%'} justifyContent='center' m={8} flexWrap={'wrap'}>
                {data && data.map((product) => singleData._id !== product._id && <Ma {...product} widthFor='12%' key={product._id} />)}
            </Box>


            <LargeWithAppLinksAndSocial />
        </>
    )
}

export default SingleProduct