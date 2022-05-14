import React, {useState,  useLayoutEffect} from "react";
import { chakra, Box, Image, Flex, useColorModeValue,Text, HStack } from "@chakra-ui/react";

const Ma = ({productName,image, price, description}) => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "black",
        },
    };
    const [slides, setSlides] = React.useState([]);
    
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
    useLayoutEffect(()=>{
        let arr = [];
        for(let i = 0; i < image.length; i++) {
            arr.push({img : image[i]});
        }
        setSlides(arr);
    },[])
    return (
    // <Flex
    //     bg={useColorModeValue("#F9FAFB", "gray.600")}
    //     p={5}
    //     w="full"
    // >
        <Box
        // maxW={"300px"}
            maxW="xs"
            mx="auto"
            m={5}
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
        >
        <Box px={4} py={2}>
            <chakra.h1
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="lg"
                textTransform="uppercase"
                h='20px'
                overflow="hidden"
                >
            {productName}
            </chakra.h1>
            <chakra.p
                mt={1}
                fontSize="md"
                h='20px'
                overflow="hidden"
                color={useColorModeValue("gray.600", "gray.400")}
            >
            {description}
            </chakra.p>
        </Box>
        <Flex
            w="full"
            bg={useColorModeValue("gray.200", "gray.600")}
            alignItems="center"
            justifyContent="center"
        >
        <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} 
                
                boxSize="full" shadow="md" flex="none">
                    <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    h='380px'
                    w="full"
                    fit="cover"
                    backgroundSize="cover"
                    />
                </Box>
            ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", "15px"]}
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
            <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
            >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    ${price}
                </chakra.h1>
            {/* <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
                bg: "gray.200",
            }}
            _focus={{
                bg: "gray.400",
            }}
            >
            Add to cart
          </chakra.button> */}
            </Flex>
        </Box>
    // </Flex>
    );
};

export default Ma;