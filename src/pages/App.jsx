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
} from "@chakra-ui/react";
import { IconMenu, IconMoonStars, IconSun } from "@tabler/icons-react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function App() {
  const { toggleColorMode } = useColorMode();
  const mainBg = useColorModeValue("gray.50", "gray.900");
  const headerFooterBg = useColorModeValue("white", "gray.900");
  const headerBorder = useColorModeValue("gray.200", "gray.800");
  const icon = useColorModeValue(<IconMoonStars />, <IconSun />);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = (
    <>
      <ChakraLink as={ReactRouterLink} to="/patient">
        Patient
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/visitor">
        Visitor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/doctor">
        Doctor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admission">
        Admission
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admin">
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
            <Box>
              <ChakraLink as={ReactRouterLink} to="/">
                Logo to Home
              </ChakraLink>
            </Box>
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
          border="2px"
          mx="auto"
          my="32px"
          p="32px"
        >
          <Outlet />
        </Box>
        <Box as="footer" bg={headerFooterBg}>
          {/* Your footer content */}
          <p>Footer</p>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
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
