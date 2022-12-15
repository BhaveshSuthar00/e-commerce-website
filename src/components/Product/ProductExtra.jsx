import { Box, Text } from "@chakra-ui/react"

export const ProductExtra = () => {
    return (
        <Box>
            <Text fontSize={'larger'} fontWeight='bold'>Specifications</Text>
            <Box display={'flex'} flexWrap='wrap' justifyContent={'space-between'} mt={4}>
                {
                    [
                        {header : "Fabric", body : "Cotton"},
                        {header : "Fit", body : "Slim fit"},
                        {header : "Main Trend", body : "New Basics"},
                        {header : "Neck", body : "Polo Collar"},
                        {header : "Fabric 2", body : "Polyester"},
                        {header : "Length", body : "Regular"},
                        {header : "Multipack Set", body : "Single", line  : true},
                        {header : "Occasion", body : "Casual" , line : true}
                    ].map((item, i) => (
                        <Box key={i} width='48%'>
                            <Text fontSize={"x-small"} color={'gray'}>{item.header}</Text>
                            <Text>{item.body}</Text>
                            {!item.line && (
                                <hr style={{marginTop : "3%", width : '80%', marginBottom : "3%" }}/>
                            )}
                        </Box>
                    ))
                }
            </Box>
        </Box>

    )
}