import { Button, Icon, Text } from "@chakra-ui/react"

export const ProductName = ({icon, productName, brand, rating, price, discount}) => {
    return (
        <>
        <Text fontSize={'3xl'} fontWeight='bold' >
                {productName}
            </Text>
            <Text fontSize={'xl'} mt={1} mb={3} color='gray'>
                {brand}
            </Text>
            <Button>
                {rating ? rating : 4.4} <Icon as={icon} color='teal' ml={1} mr={3} /> Ratings
            </Button>
            <Text as={"hr"} style={{marginTop : "2%", marginBottom : "1%" }}/>
            <Text fontSize={'2xl'}>
                <Text as='span' fontWeight={'bold'}>&#8377;{Math.floor(price * discount / 100)} </Text> 
                <Text as='span' color='gray'>MRP </Text> 
                <Text as='span' color={'gray.400'} textDecor='line-through'>&#8377;{price}</Text> 
                <Text color='orange.400' as='span' fontWeight={'bold'}> ( {discount}% OFF)</Text>
            </Text>
        <Text color={'green.400'} fontSize='sm' fontWeight='bold' mt={2}>inclusive of all taxes</Text>
        </>
    )
}