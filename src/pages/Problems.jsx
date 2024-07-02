import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ProblemList from "../components/problems/ProblemList";
import Output4 from "../components/problems/Output4";

export default function Problems() {
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onClickDisplay4() {
    setModalTitle("Output 4");
    setModalContent(<Output4 />);
    onOpen();
  }

  return (
    <>
      <Box p="32px">
        <Heading as="h2" mb="24px" maxWidth="900px" mx="auto">
          Problem Statements
        </Heading>
        <Box
          bg={bgCard}
          border="1px"
          borderColor={borderCard}
          p={"24px"}
          rounded="lg"
          maxWidth="900px"
          mx="auto"
        >
          <OrderedList>
            <Heading size="md">Simple</Heading>
            <Heading size="md">Moderate</Heading>
            <ProblemList
              number={4}
              toastDesc={toastDesc4}
              onClickDisplay={onClickDisplay4}
            >
              Display the marital statuses of patients where there are more than
              5 patients in each status
            </ProblemList>
            <Heading size="md">Difficult</Heading>
          </OrderedList>
        </Box>
      </Box>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalContent}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const toastDesc4 = {
  description: (
    <Flex flexWrap="wrap" flexDir="column" fontFamily="Geist Mono">
      <Text>SELECT maritalStatus, COUNT(*) as patientCount</Text>
      <Text>FROM patient</Text>
      <Text>GROUP BY maritalStatus</Text>
      <Text>HAVING patientCount {">"} 5</Text>
    </Flex>
  ),
};
