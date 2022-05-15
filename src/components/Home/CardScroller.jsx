import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";

const Component = () => {
    const sliderRef = useRef();
    const slides = [
        {
        img: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/15/dfaf36a8-b236-4f1b-b01a-489b78fa718b1652589954444-DK-b2.gif",
        },
        {
        img: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/15/9480982c-ce8c-43c0-b8f1-48211a70581c1652596808550-DK-Buy1-get-off.jpg",
        },
        
        
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const [slidesCount, setSliderCount] = useState(slides.length);

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
    
    useEffect(()=>{
        if(sliderRef.current) return;
        sliderRef.current = setInterval(() => {
            nextSlide();    
        }, 5000);
    }, [])
    return (
        <>
            <Flex
                w="100%"
            >
                <Flex w="full" overflow="hidden" >
                <Flex  w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                            <Image
                            src={slide.img}
                            alt="carousel image"
                            boxSize="full"
                            backgroundSize="cover"
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
            </Flex>
                <HStack justify="center" mt={3} mb={3}  w="full">
                {Array.from({ length: slidesCount }).map((_, slide) => (
                    <Box
                    key={`dots-${slide}`}
                    cursor="pointer"
                    boxSize={["5px", "7px"]}
                    bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                    rounded="50%"
                    display="inline-block"
                    transition="background-color 0.6s ease"
                    _hover={{ bg: "blackAlpha.800" }}
                    onClick={() => setSlide(slide)}
                    ></Box>
                ))}
                </HStack>
        </>
    );
};
export default Component;