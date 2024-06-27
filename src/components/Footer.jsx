import {
  Box,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer({ bg, borderColor }) {
  return (
    <Box
      as="footer"
      bg={bg}
      borderTop="2px"
      borderTopColor={borderColor}
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
  );
}

Footer.propTypes = {
  bg: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};
