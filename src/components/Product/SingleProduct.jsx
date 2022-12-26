import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BaseURL } from '../../common/constants';
import { ProductImg } from './ProductImg';
import  { HiShoppingBag } from 'react-icons/hi'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { ProductList } from './ProductList';
import LargeWithAppLinksAndSocial from '../Footer/Footer';
import { ProductExtra } from './ProductExtra';
import { useSelector } from 'react-redux';
import Ma from './Card';
import { ProductName } from './ProductName';
import { ButtonS } from './ButtonS';
const SingleProduct = () => {
    const { id } = useParams();
    const [singleData, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { data } = useSelector((store) => store.data);
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
            <Box w={'90%'} m='auto' display='flex' flexDir={{base : 'row', lg : "row", md : "row", sm : "row"}} mt={4}>
                <Flex flex={1}  wrap={'wrap'}>
                    <ProductImg images={singleData.image}/>
                </Flex>
                <Box flex={1}>
                    <Box ml={8} w='full'>
                        <ProductName
                            productName={singleData.productName} 
                            icon={AiFillStar} 
                            price={singleData.price} 
                            discount={singleData.discount} 
                            brand={singleData.brand} 
                            />
                        <ButtonS 
                            WishListBag={AiOutlineHeart} 
                            BagIcon={HiShoppingBag} 
                            productId={singleData._id}
                        />
                        <ProductList header={"Product Details"} list={['Black Tshirt for men','Solid','Regular length','Polo collar','Short','regular sleeves','Knitted cotton fabric']}/>
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