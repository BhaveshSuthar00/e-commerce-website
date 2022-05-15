import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
    Input,
    Spacer,
    InputGroup,
    InputLeftElement,
    ButtonGroup,
    VStack,
    Button,
    useOutsideClick,
    // useBreakpointValue,
    // MenuDivider,
    // MenuItem,
    // MenuList,
    // Center,
    // Avatar,
    // Menu,
    // MenuButton,
} from "@chakra-ui/react";
import Cookies from 'universal-cookie';

import {v4 as uuid} from 'uuid'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { ProfileBar } from "./ProfileBar";
const Navbar = () => {
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"80px"}
            overflow="hidden"
            py={{ base: 2 }}
            px={{ base: 14 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
            >
            <Flex
                flex={{ base: 1, md: "auto" }}
                ml={{ base: -2 }}
                display={{ base: "flex", md: "none" }}
            >
                <IconButton
                onClick={onToggle}
                icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} align={"center"} >
                <Link to='/' >
                    <Image
                        align='center'
                        boxSize='35px'
                        src={'./myntra.svg'}
                    />
                </Link>
                
                <Flex display={{ base: "none", md: "flex" }} ml={5} align={"center"}>
                <DesktopNav />

                </Flex>
                <Spacer />
                <Box display={{ base: "flex", lg: "flex", md: "none", sm : "none"}} minW='30%' >
                    <InputGroup variant='filled' >
                        <InputLeftElement  children={<AiOutlineSearch />}/>
                        <Input type='text' maxW='100%'  placeholder='Search for Brand '/>
                    </InputGroup>
                </Box>
                <Flex>
                    <Box>
                        <Box display='block' px={2}>
                            <Popover   trigger={"hover"} placement={"bottom-start"}>
                                <PopoverTrigger>
                                <Box>
                                    <MdOutlinePersonOutline  style={{ margin: 'auto' , fontSize : "22px"}}/>
                                    <Text fontWeight={500}>
                                        Profile
                                    </Text>
                                </Box>
                                </PopoverTrigger>
                                <PopoverContent 
                                    mt={4} 
                                    justify='center'
                                    border={0}
                                    boxShadow={"xl"}
                                    rounded={"xl"}
                                    bg={popoverContentBgColor}
                                    p={4}
                                >
                                    <ProfileBar />
                                </PopoverContent>

                            </Popover>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
            {/* stack.txt */}
            </Flex>
            <Collapse in={isOpen} animateOpacity>
            <MobileNav />
            </Collapse>
        </Box>
    );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
    <Stack direction={"row"} spacing={8}>
        {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
            <Popover  trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger >
                <Box as={Link}
                to={navItem.href ?? "#"}
                p={2}
                fontWeight="bold"
                fontSize={"lg"}
                color={linkColor}
                _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                }}
                >
                {navItem.label}
                </Box>
            </PopoverTrigger>

            {navItem.children && (
                <PopoverContent
                border={0}
                boxShadow={"xl"}
                rounded={"xl"}
                bg={popoverContentBgColor}
                p={4}
                mt={4}
                minW={"sm"}
                >
                <Stack>
                    {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                    ))}
                </Stack>
                </PopoverContent>
            )}
            </Popover>
        </Box>
        ))}
    </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
    <Link
        to={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
    <Stack direction={"row"} align={"center"}>
        <Box>
            <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            >
            {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
        >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
    </Stack>
    </Link>
    );
};

const MobileNav = () => {
    return (
    <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
    >
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
    </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
            py={2}
            // as={Link}
            // href={href ?? "#"}
            justify={"space-between"}
            align={"center"}
            _hover={{
                textDecoration: "none",
            }}
            >
            <Text
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
            >
                {label}
            </Text>
            {children && (
                <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
                />
            )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
            <Stack
                mt={2}
                pl={4}
                borderLeft={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
                align={"start"}
            >
                {children &&
                children.map((child) => (
                    <Link key={child.label} py={2} to={child.href}>
                    {child.label}
                    </Link>
                ))}
            </Stack>
            </Collapse>
        </Stack>
    );
};

// const menudsdf = () =>{
//     return (
//         <Menu>
//         <MenuButton
//           as={Button}
//           rounded={'full'}
//           variant={'link'}
//           cursor={'pointer'}
//           minW={0}>
//           <Avatar
//             size={'sm'}
//             src={'https://avatars.dicebear.com/api/male/username.svg'}
//           />
//         </MenuButton>
//         <MenuList alignItems={'center'}>
//           <br />
//           <Center>
//             <Avatar
//               size={'2xl'}
//               src={'https://avatars.dicebear.com/api/male/username.svg'}
//             />
//           </Center>
//           <br />
//           <Center>
//             <p>Username</p>
//           </Center>
//           <br />
//           <MenuDivider />
//           <MenuItem>Your Servers</MenuItem>
//           <MenuItem>Account Settings</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </MenuList>
//       </Menu>
//     )
// }

class navitem {
    constructor(a, b, c, de) {
        this.label = a;
        this.subLabel = b;
        this.children = c ? [...c] : null;
        this.href = de ? de : null;
    }
}
const NAV_ITEMS = []

const NAV_ITEMSList = [
    {
        label: 'Men',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '/product',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '/product',
            },
        ],
    },
    {
        label: 'Women',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Kids',
        href: '#',
    },
    {
        label: 'Home & Living',
        href: '#',
    },
];
for(let i = 0; i<NAV_ITEMSList.length; i++) {
    let nk = new navitem(NAV_ITEMSList[i].label, NAV_ITEMSList[i].subLabel, NAV_ITEMSList[i].children, 
        NAV_ITEMSList[i].href)
        NAV_ITEMS.push(nk);
}
export default Navbar;
