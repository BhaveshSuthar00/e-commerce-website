import React from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    MenuDivider,
    MenuItem,
    MenuList,
    Center,
    Avatar,
    Menu,
    MenuButton,
    Image,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import {Link} from 'react-router-dom'
import axios from "axios";
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
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
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                <Link to='/'>
                    <Image
                        boxSize='31px'
                        src={'./threejs.svg'}
                    />
                </Link>
                
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
                </Flex>
                
            </Flex>

            <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
                align={"center"}
            >
                <Button onClick={()=>{
                    const startUrl = 'https://e-commerce-port.herokuapp.com';
                    // const startUrl = 'http://localhost:2200'
                    axios.get(`${startUrl}/clearcookie`, {withCredentials: true}).then((res)=> {
                        console.log(res)
                    }).catch((err)=>{ console.log(err)})
                }}>
                    LogOut
                </Button>
                <Link to="/login">
                    <Button
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"outline"}
                    >
                    Sign In
                    </Button>
                </Link>
                <Link to='/signup'>
                    <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    _hover={{
                        bg: "pink.300",
                    }}
                    >
                    Sign Up
                    </Button>
                </Link>
            </Stack>
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
    <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
                <Link
                to={navItem.href ?? "#"}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                }}
                >
                {navItem.label}
                </Link>
            </PopoverTrigger>

            {navItem.children && (
                <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
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
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
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
console.log(NAV_ITEMS)
export default Navbar;
