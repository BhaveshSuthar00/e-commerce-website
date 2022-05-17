import React, {useState,  useLayoutEffect, useRef} from "react";
import { chakra, Box, Image, Flex, useColorModeValue,Text, HStack } from "@chakra-ui/react";

const Ma = ({productName,image, price, description, discount}) => {
    const [slides, setSlides] = React.useState([]);
    const sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = slides.length;
    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    const handelSiderFun = ()=>{
        if(sliderRef.current) return;
        sliderRef.current = setInterval(() => {
            nextSlide()
        }, 1000);
    }
    const handleMouseLeave = () =>{
        clearInterval(sliderRef.current)
        setSlide(0)
        sliderRef.current = null;
    }
    useLayoutEffect(()=>{
        let arr = [];
        for(let i = 0; i < image.length; i++) {
            arr.push({img : image[i]});
        }
        setSlides(arr);
    },[])
    return (
        <Box
            w={"220px"}
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
        <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="full" {...carouselStyle}
            cursor='pointer'
            onMouseEnter={()=>handelSiderFun()}
            onMouseLeave={()=>handleMouseLeave()}
            
        >
            {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} 
                boxSize="full" shadow="md" flex="none">
                    <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    h='270px'
                    w="full"
                    fit="cover"
                    backgroundSize="cover"
                    />
                </Box>
            ))}
        </Flex>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["5px", "7px"]}
                m="0 2px"
                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: "blackAlpha.800" }}
                onClick={() => setSlide(slide)}
            ></Box>
            ))}
        </HStack>
        </Flex>
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