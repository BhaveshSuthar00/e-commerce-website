import { Box, IconButton, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
export const ProductImg = ({images}) => {
    const [current, setCurrent] = useState(0);
    const setCurrentFunction = (operation) => {
        operation === '-' && setCurrent(prev => {
            if(current > 0) return prev - 1;
            else if(current === 0) return images.length - 1;
            else return prev;
        })
        operation === '+' && setCurrent(prev => {
            if(current < images.length -1) return prev + 1;
            else if(current === images.length -1) return 0;
            else return prev;
        })
    }
    return (
        <>
            <Box w="full" position={'relative'} height={'91vh'}>
                <Image src={images[current]} w={"full"} h={'full'} />
                <Box display={'flex'} justifyContent={"space-between"} position='absolute' w='full' m='auto' top={'50%'}>
                    <IconButton icon={<AiOutlineLeft />}  _focus={{outline : 1}} onClick={() => setCurrentFunction("-")} ml={3} />
                    <IconButton icon={<AiOutlineRight />} _focus={{outline : 1}} onClick={() => setCurrentFunction("+")} mr={3} />
                </Box>
            </Box>
        </>
    )
}