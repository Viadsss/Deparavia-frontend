import { Box, Heading } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Admission() {
  return (
    <Box>
      <Heading>Admission Page</Heading>
      <ChakraLink as={ReactRouterLink} to="./new">
        New Patient
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="./returning">
        Returning Patient
      </ChakraLink>
    </Box>
  );
}
