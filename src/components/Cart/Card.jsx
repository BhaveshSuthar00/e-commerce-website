import { CloseIcon } from "@chakra-ui/icons"
import { chakra, Box, Flex, IconButton, Image, Text } from "@chakra-ui/react"

export const Card = ({ _id, category, brand, widthFor, productName,image, price, description, discount, deleteFun }) => {
    return (
        <>
            <Box h={'15vh'} m={4} display='flex' overflow={'hidden'} justifyContent={'space-between'} borderRadius='md' boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;" >
                <Box h={'100%'} w='20%'>
                    <Image src={image} w='100%' h={'100%'} />
                </Box>
                <Box flex={1} ml={2} mt={2}>
                    <IconButton icon={<CloseIcon />} float='right' m={2} variant='unstyled' onClick={() => deleteFun(_id)} _focus={{outline : 0}} />
                    <Text fontWeight={'bold'} height='3vh' fontSize={'sm'} overflow={'hidden'}>{productName}</Text>
                    <Text color={'gray.600'} height='3vh' overflow={'hidden'}>{description}</Text>
                    <Flex align={'center'}>
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
            </Box>
        </>
    )
}