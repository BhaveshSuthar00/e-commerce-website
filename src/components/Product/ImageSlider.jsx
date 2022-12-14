import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { useLayoutEffect, useRef, useState } from "react";

export const ImageSlider = ({image, height}) => {
    const [slides, setSlides] = useState([]);
    const sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = useMemo(() => slides.length, [slides]);
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
            nextSlide();
        }, 1000);
    }
    const handleMouseLeave = () =>{
        clearInterval(sliderRef.current);
        setSlide(0);
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
        
        <Flex w="full" overflow="hidden" pos="relative" width={height && "40%"} height={height && '90vh'}>
        <Flex w="full" {...carouselStyle}
            cursor='pointer'
            onMouseEnter={()=>handelSiderFun()}
            onMouseLeave={()=>handleMouseLeave()}
            
        >
            {
                slides && slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} 
                        boxSize="full" shadow="md" flex="none"
                    >
                        <Image
                        src={slide.img}
                        alt="carousel image"
                        boxSize="full"
                        h={height ? 'full' : '270px'}
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
    )
}