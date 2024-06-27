import {
  Avatar,
  Box,
  Card,
  Circle,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";

const teamDesigns = (
  <>
    <Circle
      size={120}
      bg="rgba(255, 190, 22, 0.25)"
      filter="auto"
      blur="24px"
      position="absolute"
      top="10%"
      right="5%"
    />
    <Circle
      size={120}
      bg="rgba(197, 48, 48, 0.5)"
      filter="auto"
      blur="24px"
      position="absolute"
      bottom="20%"
      left="5%"
    />
    <Circle
      size={250}
      bg="rgba(85, 102, 255, 0.5)"
      filter="auto"
      blur="24px"
      position="absolute"
      top="0%"
      left="30%"
    />
    <Circle
      size={200}
      bg="rgba(209, 233, 218, 0.8)"
      filter="auto"
      blur="24px"
      position="absolute"
      top="5%"
      left="3%"
    />
    <Circle
      size={120}
      bg="rgba(11, 197, 234, 0.5)"
      filter="auto"
      blur="24px"
      position="absolute"
      top="30%"
      right="20%"
    />
    <Circle
      size={200}
      bg="rgba(255, 190, 22, 0.50)"
      filter="auto"
      blur="24px"
      position="absolute"
      bottom="25%"
      left="20%"
    />
    <Circle
      size={120}
      bg="rgba(255, 190, 22, 0.50)"
      filter="auto"
      blur="24px"
      position="absolute"
      bottom="50%"
      left="50%"
    />
    <Circle
      size={300}
      bg="rgba(227, 61, 148, 0.6)"
      filter="auto"
      blur="24px"
      position="absolute"
      bottom="15%"
      right="10%"
    />
  </>
);

export default function Team() {
  return (
    <Flex
      justifyContent="center"
      minHeight="calc(100vh - 64px)"
      overflow="hidden"
      py="24px"
      position="relative"
    >
      <Box position="absolute" h="100%" w="100%">
        {teamDesigns}
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        position="relative"
        textAlign="center"
        w="100%"
        gap="16px"
      >
        <Tag colorScheme="blue">Our Group</Tag>
        <Heading size="3xl">Group 9</Heading>
        <Flex
          textAlign="center"
          justifyContent="space-evenly"
          alignItems="center"
          gap="32px"
          mt="64px"
          flexWrap="wrap"
        >
          <Card
            colorScheme="blue"
            w="300px"
            p="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar size="lg" src="/home/Dela Cruz.jpg" />
            <Text fontWeight="bold">Jhana Mae Dela Cruz</Text>
            <Text>Role Here</Text>
            <Text color="gray.400">
              Medical specialization dealing with the diagnosis, treatment and
              prevention of poisoning.
            </Text>
          </Card>
          <Card
            w="300px"
            p="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar size="lg" src="" />
            <Text fontWeight="bold">Hazel Ann Pangilinan</Text>
            <Text>Role Here</Text>
            <Text color="gray.400">
              Medical specialization dealing with the diagnosis, treatment and
              prevention of poisoning.
            </Text>
          </Card>
          <Card
            w="300px"
            p="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar size="lg" src="" />
            <Text fontWeight="bold">Kaye Regala</Text>
            <Text>Role Here</Text>
            <Text color="gray.400">
              Medical specialization dealing with the diagnosis, treatment and
              prevention of poisoning.
            </Text>
          </Card>
          <Card
            w="300px"
            p="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar size="lg" name="John Paul Viado" src="/home/Viado.jpg" />
            <Text fontWeight="bold">John Paul Viado</Text>
            <Text>Lead Programmer</Text>
            <Text color="gray.400">
              Medical specialization dealing with the diagnosis, treatment and
              prevention of poisoning.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
