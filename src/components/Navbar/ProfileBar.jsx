import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import { userLoggedOut } from "../../Redux/Login/Action";
export const ProfileBar = ()=>{
    const {status} = useSelector((store)=> store.login);
    const [loggedornot , setLoggedornot] = useState(status)
    const dispatch = useDispatch();
    const handleLogOut = ()=>{
        console.log('here in handleLogOut')
        setLoggedornot(!loggedornot);
        dispatch(userLoggedOut())
    }
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
                    loggedornot && status ?
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
                    <Link to={'/signup'}
                        onClick={()=>{
                            console.log('her')
                            setLoggedornot(true)
                        }}
                    >
                        <Button 
                        variant='outline'
                        color='red.500'
                        _hover={{bg:'transparent'}}
                        _active={{bg:'transparent'}}
                        >
                            LOGIN / SIGNUP
                        </Button>
                    </Link> 
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
