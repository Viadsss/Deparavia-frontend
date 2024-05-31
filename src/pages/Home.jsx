import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as ChakraLink } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="tomato" h="100%">
      <ChakraLink as={ReactRouterLink} to="/patient">
        Patient
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/doctor">
        Doctor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/visitor">
        Visitor
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admission">
        Admission
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/admin">
        Admin
      </ChakraLink>
    </Box>
  );
}
