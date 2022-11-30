import { 
    HStack, 
    VStack,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Textarea,
    Box,
    Text,
    Stack,
    Flex,
    Spacer,
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import { BaseURL } from '../../common/constants';
import Ma from './Card';
const AdminDashBoard = () => {
    const [products, setProducts] = useState([]);
    const [idCount , setIdCount] = useState(0)
    useEffect(() =>{
        axios.get(`${BaseURL}/product/getAll`).then((res)=>{
            setProducts(res.data);
            setIdCount(res.data.length);
        })
        .catch((err)=>{console.log(err)})
    },[])
    const [imgUrl, setImgUrl] = useState([]);
    const [colorList, setColorList] = useState([]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        let  colorArr = [];
        let imgArr = [];
        for(let i = 0; i<imgUrl.length; i++) {
            imgArr.push(imgUrl[i].url);
        }
        for(let i = 0; i<colorList.length; i++) {
            colorArr.push(colorList[i].color);
        }
        const ProductData = {
            id : idCount,
            productName : document.getElementById('productName').value,
            price: +document.getElementById('price').value,
            discount: +document.getElementById('discount').value,
            category: document.getElementById('category').value,
            subCategory: document.getElementById('subCategory').value,
            image: imgArr,
            stockQty: +document.getElementById('stockQty').value,
            description: document.getElementById('description').value,
            fabric : document.getElementById('fabric').value,
            brand : document.getElementById('brand').value,
            color : colorArr
        };
        console.log(ProductData);
        // axios.post('http://localhost:2200/product/post', {...ProductData, method: 'POST'}).then((response)=>{
        axios.post(`${BaseURL}/product/post`, {...ProductData, method: 'POST'}).then((response)=>{
            colorArr = [];
            imgArr = [];
            setImgUrl([]);
            setColorList([]);
            document.getElementById('productName').value = null;
            document.getElementById('idFor').value = null;
            document.getElementById('price').value = null;
            document.getElementById('discount').value = null;
            document.getElementById('category').value = null;
            document.getElementById('subCategory').value = null;
            document.getElementById('stockQty').value = null;
            document.getElementById('description').value = null;
            document.getElementById('fabric').value = null;
            document.getElementById('brand').value = null;
            setIdCount(idCount+1)
            setProducts([...products, response.data.product])
        }).catch((error) => {console.log(error);});        
    };
    // if(!idCount){
    //     return <>Loading....</>
    // }
    return (
        <>
            <Flex w='100%' direction={['column', 'row']}>
                <VStack direction='row' bg='pink' w={{base : "50%",lg : "50%", md : "100%", sm : "100%", xm : "100%"}}  
                p={3}>
                    <Box as='form' w={"100%"} bg='pink.100' onSubmit={(e)=>handleSubmit(e)} >
                        <FormControl>
                            <FormLabel htmlFor='idFor'>Id</FormLabel>
                            <Input id='idFor' defaultValue={idCount} type='number' />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='productName'>Product Name</FormLabel>
                            <Input id='productName' type='text' />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='price'>Enter Price</FormLabel>
                            <Input id='price' type='number' />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='discount'>Enter Discount</FormLabel>
                            <Input id='discount' type='number' />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='category'>Enter Category</FormLabel>
                            <Input id='category' type='text' />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='subCategory'>Enter subCategory</FormLabel>
                            <Input id='subCategory' type='text' />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='image'>Enter Image Url's </FormLabel>
                            <Input id='image' type='text' />
                            <Button
                                onClick={()=>{
                                    let url = document.getElementById('image');
                                    setImgUrl([...imgUrl, {url :url.value, id : uuid()}]);
                                    url.value = null;
                                }}
                            >
                                Add
                            </Button>
                            <VStack maxW='100%'>
                                {
                                    imgUrl && imgUrl.map((item, index) =>(
                                        <HStack key={item.id} maxW='100%'>
                                            <Text maxW='70%' maxH="20px" overflow='hidden'>
                                                    {item.url}
                                                </Text>
                                                <Button maxW='20%' onClick={()=>{
                                                    let newArr = imgUrl.filter(itemUrl =>{
                                                        if(itemUrl.url === item.url && item.id === itemUrl.id){
                                                            return false;
                                                        } else return true;
                                                    })
                                                    setImgUrl(newArr)
                                                }}>
                                                    Remove
                                                </Button>
                                        </HStack>      
                                    ))
                                }
                            </VStack>
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='fabric'>Enter Fabric</FormLabel>
                            <Input id='fabric' type='text' />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='brand'>Enter Brand Name</FormLabel>
                            <Input id='brand' type='text' />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='color'>Add Color's </FormLabel>
                            <Input id='color' type='text' />
                            <Button
                                onClick={()=>{
                                    let color = document.getElementById('color');
                                    setColorList([...colorList, {color : color.value, id : uuid()}])
                                    color.value = null;
                                }}
                            >
                                Add
                            </Button>
                            <VStack maxW='50%'>
                                {
                                    colorList && colorList.map((item, index) =>(
                                        <HStack key={item.id} w='full'>
                                            <Text w='70%' maxH="20px" overflow='hidden'>
                                                    {item.color}
                                                </Text>
                                                <Button w='30%' onClick={()=>{
                                                    let newArr = colorList.filter(itemUrl =>{
                                                        if(itemUrl.color === item.color && item.id === itemUrl.id){
                                                            return false;
                                                        } else return true;
                                                    })
                                                    setColorList(newArr)
                                                }}>
                                                    Remove
                                                </Button>
                                        </HStack>      
                                    ))
                                }
                            </VStack>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor='stockQty'>Enter StockQty</FormLabel>
                            <Input id='stockQty' type='number' />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='description'>Product Description</FormLabel>
                            <Textarea id='description' type='text' />
                        </FormControl>
                        <Button type='submit'>
                            submit
                        </Button>
                    </Box>
                </VStack>
                {/* <Spacer /> */}
                <VStack  
                    w={{base : "50%",lg : "50%", md : "100%", sm : "100%", xm : "100%"}}>
                    <Flex
                    alignItems="center"
                    justifyContent="center"  
                    flexWrap={'wrap'}>
                        {/* {
                            products && products.map((item)=>(
                                <Ma {...item} key={item._id}/>
                            ))
                        } */}
                    </Flex>
                </VStack>
                {/* <Box maxW={{base : "50%",lg : "50%", md : "100%", sm : "100%", xm : "100%"}}   >
                    <Flex flexWrap='wrap'>
                        {
                            products && products.map((item)=>(
                                <Ma {...item} key={item._id}/>
                            ))
                        }
                    </Flex>
                </Box> */}
            </Flex>
        </>
    )
}

export default AdminDashBoard