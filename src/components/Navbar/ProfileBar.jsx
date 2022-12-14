import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import { BaseURL } from "../../common/constants";
import { LogOutFunction } from "../../Redux/Login/Login";
export const ProfileBar = ()=>{
    const {status} = useSelector((store)=> store.login);
    const dispatch = useDispatch();
    const handleLogOut = () => dispatch(LogOutFunction());
    const ArrayOfOptions = [
        {
            href : "#",
            text : "Orders"
        },
        {
            href : "#",
            text : "Wishlist"
        },
        {
            href : "#",
            text : "Gift Cards"
        },
        {
            href : "#",
            text : "Content us"
        },
        {
            href : "#",
            text : "Myntra insiders"
        },
    ]
    const ArrayOfOptions2 = [
        {
            href : "#",
            text : "Credit"
        },
        {
            href : "#",
            text : "Coupons"
        },
        {
            href : "#",
            text : "Saved Cards"
        },
        {
            href : "#",
            text : "Saved Addresses"
        },
    ]
    return (
        <Stack>
            <VStack
                spacing={2}
                align='left'
                py={2}
                borderBottom='1px solid grey'      
            >
                <Text as='h4' fontWeight='bold'>
                    Welcome
                </Text>
                <Text>
                    To access account and manage orders
                </Text>
                {
                    status ?
                    <Button
                    onClick={handleLogOut}
                    variant='outline'
                    color='red.500'
                    _hover={{bg:'transparent'}}
                    _active={{bg:'transparent'}}
                    >
                        LOGINOUT
                    </Button>
                    :
                    <>
                        <Button 
                        as={Link}
                        to={'/signup'}
                        variant='outline'
                        color='red.500'
                        _hover={{bg:'transparent'}}
                        _active={{bg:'transparent'}}
                        >
                            SIGNUP
                        </Button>
                        <Button
                        as={Link}
                        to={'/login'} 
                        variant='outline'
                        color='red.500'
                        _hover={{bg:'transparent'}}
                        _active={{bg:'transparent'}}
                        >
                            LOGIN
                        </Button>                    
                    </>
                     
                }
            </VStack>
            <VStack
                spacing={1}
                align='left'
                py={2}
                borderBottom='1px solid grey' 
            >
                {
                    ArrayOfOptions && ArrayOfOptions.map((item, index)=> (
                        <Box as={Link}
                            key={uuid()}
                            to={item.href}
                            fontSize='lg'
                            transition='0.2s ease-in-out'
                            _hover={{fontWeight: 500}}
                        >
                            {item.text}
                        </Box>
                    ))
                }
            </VStack>
            <VStack
                spacing={1}
                align='left'
                py={2}
            >
                {
                    ArrayOfOptions2 && ArrayOfOptions2.map((item, index)=> (
                        <Box as={Link}
                            key={uuid()}
                            to={item.href}
                            fontSize='lg'
                            transition='0.2s ease-in-out'
                            _hover={{fontWeight: 500}}
                        >
                            {item.text}
                        </Box>
                    ))
                }
            </VStack>
        </Stack>
    )
}
