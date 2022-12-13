import React from "react";
import { chakra, Box, Flex, useColorModeValue,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider";
const Ma = ({_id, productName,image, price, description, discount}) => {
    return (
        <Box
            as={Link}
            w={"220px"}
            to={`${_id}`}
            bg={useColorModeValue("white", "gray.800")}
            shadow='md'
            animateopacity='true'
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
        <Box px={4} mt={2} >
            <chakra.h1
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="md"
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
                px={4}
                py={2}
                roundedBottom="lg"
            >
                {
                        discount !== 0 ?
                        <chakra.h1  fontWeight="bold" fontSize="md">
                        ${Math.floor(price*discount/100)}
                        </chakra.h1>
                        :
                        <chakra.h1  fontWeight="bold" fontSize="md">
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
                    discount !== 0 ?
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
        </Box>
    );
};

export default Ma;