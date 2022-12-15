import { Box, Text } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
export const ProductList = ({list, header}) => {
    return (
        <Box>
            <hr style={{marginTop : "2%", marginBottom : "1%" }}/>
            <Text fontWeight={'bold'} fontSize='larger'>{header}</Text>
            { 
                list && list.map(item => (
                    <Text key={uuid()} fontSize='medium' fontWeight={'light'}>
                        { item }
                    </Text>
                ))
            }
        </Box>
    )
}