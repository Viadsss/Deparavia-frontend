import { Outlet } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Image,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { IconMenu, IconMoonStars, IconSun } from "@tabler/icons-react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Logo from "../assets/DeparaviaLogo.png";

export default function App() {
  const { toggleColorMode } = useColorMode();
  const mainBg = useColorModeValue("gray.50", "gray.900");
  const headerFooterBg = useColorModeValue("white", "gray.900");
  const headerBorder = useColorModeValue("gray.200", "gray.700");
  const icon = useColorModeValue(<IconMoonStars />, <IconSun />);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = (
    <>
      <ChakraLink as={ReactRouterLink} to="/patient" onClick={onClose}>
        Patient
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/visitor" onClick={onClose}>
        Visitor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/doctor" onClick={onClose}>
        Doctor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admission" onClick={onClose}>
        Admission
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admin" onClick={onClose}>
        Admin
      </ChakraLink>
    </>
  );

  return (
    <>
      <Box bg={mainBg}>
        <Box
          as="header"
          h="64px"
          bg={headerFooterBg}
          borderBottom="2px"
          borderBottomColor={headerBorder}
        >
          <Flex
            as="nav"
            h={"100%"}
            justifyContent={"space-between"}
            maxWidth={"1600px"}
            mx="auto"
            px="32px"
            py="16px"
            alignItems={"center"}
          >
            <Flex justifyContent={"center"} alignItems={"center"} gap={"8px"}>
              <ChakraLink as={ReactRouterLink} to="/">
                <Image src={Logo} boxSize="48px" />
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                _hover={{ textDecoration: "none" }}
              >
                <Heading size="md">DEPARAVIA</Heading>
              </ChakraLink>
            </Flex>
            <Flex
              gap="16px"
              alignItems="center"
              direction={{ base: "row-reverse", md: "row" }}
            >
              {!isMobile ? (
                links
              ) : (
                <IconButton icon={<IconMenu />} onClick={onOpen} />
              )}
              <Box>
                <IconButton
                  onClick={toggleColorMode}
                  icon={icon}
                  variant={"ghost"}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box
          as="main"
          w="100%"
          maxWidth="1600px"
          minHeight="calc(100vh - 64px)"
          mx="auto"
          p="32px"
        >
          <Outlet />
        </Box>
        <Box
          as="footer"
          bg={headerFooterBg}
          borderTop="2px"
          borderTopColor={headerBorder}
          px="32px"
          py="16px"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            maxWidth="1600px"
            mx="auto"
            gap="12px"
          >
            <Box textAlign={"center"} mb={{ base: "8px", md: "0" }}>
              <Heading size="sm">Information Management Project</Heading>
              <Text fontSize="sm">
                This project is part of the Information Management course
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textAlign={"center"}>
                Group Members
              </Heading>
              <UnorderedList>
                <Flex gap="10">
                  <ListItem fontSize="sm">Dela Cruz, Jhana Mae</ListItem>
                  <ListItem fontSize="sm">Pangilinan, Hazel Ann</ListItem>
                </Flex>
                <Flex gap="8">
                  <ListItem fontSize="sm">Regala, Ler Iseah Kaye</ListItem>
                  <ListItem fontSize="sm">Viado, John Paul</ListItem>
                </Flex>
              </UnorderedList>
            </Box>
            <Box textAlign={"center"}>
              <Text fontSize="sm">
                &copy; 2024 Polytechnic University of the Philippines.
                <br />
                All rights reserved.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems={"center"} gap={"8px"}>
              <ChakraLink as={ReactRouterLink} to="/">
                <Image src={Logo} boxSize="48px" />
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                _hover={{ textDecoration: "none" }}
              >
                <Heading size="md">DEPARAVIA</Heading>
              </ChakraLink>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap="16px">
              {links}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
