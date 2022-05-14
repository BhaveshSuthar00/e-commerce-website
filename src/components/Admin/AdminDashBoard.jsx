import { 
    HStack, 
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Textarea,
    Box,
    Text,
    Stack,
} from '@chakra-ui/react'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import Ma from './Card';
const AdminDashBoard = () => {
    const [products, setProducts] = useState([]);
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
        
        let ProductData = {
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
        axios.post('https://e-commerce-port.herokuapp.com/product/post', ProductData).then((response) => {console.log(response.data);}).catch((error) => {console.log(error);});
        console.log(ProductData)
        window.reload()
    };
    useEffect(() =>{
        axios.get('https://e-commerce-port.herokuapp.com/product/getAll').then((res)=>{
            setProducts(res.data);
        })
        .catch((err)=>{console.log(err)})
    },[])
    return (
        <>
            <Stack direction={['column', 'row']}>
                <VStack w={{base : "23%",lg : "23%", md : "100%", sm : "100%", xm : "100%"}}  p={3}>
                    <Box as='form' w={"100%"} onSubmit={(e)=>handleSubmit(e)}>
                        <FormControl>
                            <FormLabel htmlFor='productName'>Product Name</FormLabel>
                            <Input id='productName' type='text' />
                            <FormHelperText>Enter the Product Name.</FormHelperText>
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
                            <VStack >
                                {
                                    imgUrl && imgUrl.map((item, index) =>(
                                        <HStack key={item.id} w='100%'>
                                            <Text w='70%' maxH="20px" overflow='hidden'>
                                                    {item.url}
                                                </Text>
                                                <Button w='30%' onClick={()=>{
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
                            <VStack >
                                {
                                    colorList && colorList.map((item, index) =>(
                                        <HStack key={item.id} w='100%'>
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
                <Stack direction={['row', 'column']}>
                    {
                        products && products.map((item)=>(
                            <Ma {...item} key={item._id}/>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}

export default AdminDashBoard