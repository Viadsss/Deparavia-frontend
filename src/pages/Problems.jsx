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
import Output1 from "../components/problems/Output1";

export default function Problems() {
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onClickDisplay1() {
    console.log("Hello World!");
    setModalTitle("Output 1");
    setModalContent(<Output1 />);
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
            <ProblemList
              number={1}
              toastDesc={toastDesc1}
              onClickDisplay={onClickDisplay1}
            >
              Display the average weight of patients grouped by their marital
              status
            </ProblemList>
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

const toastDesc1 = {
  description: (
    <Flex flexWrap="wrap" flexDir="column">
      <Text>SELECT * adsda sda dadsa da da da sda das dasda d</Text>
      <Text>SELECT *</Text>
    </Flex>
  ),
};
