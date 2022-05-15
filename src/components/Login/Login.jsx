import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
} from '@chakra-ui/react';
import {apiCallLoggedIn} from '../../Redux/Login/Action'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function SplitScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            email : document.getElementById('emailInput').value,
            password : document.getElementById('passwordInput').value,
        };
        console.log(data, 'ahere')
        dispatch(apiCallLoggedIn(data)).then(()=> window.location.href= '/').catch((err)=> console.log(err));
    }
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" id='emailInput'/>
                        </FormControl>
                        <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" autoComplete='true' id='passwordInput'  />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.500'}>Forgot password?</Link>
                            </Stack>
                            <Button type='submit' colorScheme={'blue'} variant={'solid'}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </Flex>
        <Flex flex={1}>
            <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
            />
        </Flex>
        </Stack>
    );
}