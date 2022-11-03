import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
          <Stack align={"flex-start"}>
            <ListHeader>ONLINE SHOPPING</ListHeader>
            <Link href={"#"}>Men</Link>
            <Link href={"#"}>Women</Link>
            <Link href={"#"}>Kids</Link>
            <Link href={"#"}>Home & Living</Link>
            <Link href={"#"}>Beauty</Link>
            <Link href={"#"}>Gift Cards</Link>
            <Link href={"#"}>Myntra Insider</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>USEFUL LINKS</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>T&C</Link>
            <Link href={"#"}>Terms Of Use</Link>
            <Link href={"#"}>Track Orders</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>Cancellation</Link>
            <Link href={"#"}>Returns</Link>
            <Link href={"#"}>Whitehat</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Privacy policy</Link>
            <Link href={"#"}>Site Map</Link>
            <Link href={"#"}>Corportate Information</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            <Flex w="100%" flexWrap="wrap" align="center" overflow={"hidden"}>
              <Box w="50%">
                <Image src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
              </Box>
              <Box w="50%">
                <Image src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
              </Box>
            </Flex>
          </Stack>
          <Stack align={"flex-start"}>
            <Link href={"#"}>
              <Flex>
                <Box w="40%">
                  <Image src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                </Box>
                <Text>
                  <Text as="strong">100% ORIGINAL</Text>
                  guarantee for all products at myntra.com
                </Text>
              </Flex>
            </Link>
            <Link href={"#"}>
              <Flex>
                <Box w="31%">
                  <Image src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" />
                </Box>
                <Text>
                  <Text as="strong">Return within 30days</Text>
                  of receiving your order
                </Text>
              </Flex>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© try to clone myntra.com</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              href={"https://www.linkedin.com/in/bhaveshsuthar0770"}
            >
              <FiLinkedin />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/bhavesh_suthor/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
