import React from "react";
import { chakra, Box, Flex, useColorModeValue,Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider";
import useAddToCart from "../../hooks/useAddToCart";
import { useSelector } from "react-redux";
const Ma = ({_id, widthFor, productName,image, price, page, description, discount, fontSize}) => {
    const [success, loading, getData] = useAddToCart();
    // const { loading } = useSelector(store => store.cart);
    return (
        <Box
            as={page !== 'cart' ? Link : null}
            // w={"220px"}
            w={widthFor ? widthFor : '15%'}
            to={`/product/${_id}`}
            bg={useColorModeValue("white", "gray.800")}
            shadow='md'
            animateopacity='true'
            p={2}
            transition='all .2s ease-in-out'
            _hover={{
                shadow:"lg",
            }}
            rounded="sm"
        >
        <Flex
            w="full"
            bg={useColorModeValue("gray.200", "gray.600")}
            alignItems="center"
            justifyContent="center"
        >
            <ImageSlider height={false} image={image}/>
        </Flex>
        <Box 
        >
            <chakra.h1
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                mt={2}
                fontSize={fontSize ? fontSize : 'md'}
                textTransform="uppercase"
                h='20px'
                overflow="hidden"
                >
            {productName}
            </chakra.h1>
            <chakra.p
                mt={1}
                fontSize="sm"
                h='20px'
                overflow="hidden"
                color={useColorModeValue("gray.600", "gray.400")}
            >
            {description}
            </chakra.p>
        </Box>
            <Flex
                alignItems="center"
                roundedBottom="lg"
            >
                {
                        discount !== 0 ?
                        <chakra.h1  fontWeight="bold" fontSize={fontSize ? fontSize : 'md'}>
                        ${Math.floor(price*discount/100)}
                        </chakra.h1>
                        :
                        <chakra.h1  fontWeight="bold" fontSize={fontSize ? fontSize : 'md'}>
                            ${price}
                        </chakra.h1>
                }
                {
                    discount !== 0 ?
                    <chakra.h1 
                        textDecoration={'line-through'}
                        color='black.200'
                        px={4}
                        fontSize="sm">
                            ${price}
                    </chakra.h1> 
                    : null
                }
                {
                    discount !== 0 && page !== 'cart' ?
                    <Text as='span'
                        color='red.200'
                    >
                        (
                            {discount}% off
                        )
                    </Text> :
                    null
                }
            </Flex>
            {
                page === 'cart' &&
                <Button 
                    onClick={() => getData(_id)}
                    isLoading={loading}
                    w={'full'} mt={2} color='red.400' variant='ghost'
                    _hover={{bgColor : "transparent", border : '1px solid'}} 
                    _focus={{outline : 0, bgColor : "transparent"}} 
                    _active={{bgColor : "transparent"}} textAlign={'center'}
                >
                    ADD TO BAG
                </Button>
            }
        </Box>
    );
};

export default Ma;