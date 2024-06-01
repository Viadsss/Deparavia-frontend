import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  FormErrorMessage,
  FormErrorIcon,
  useToast,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export default function ChangePassModal({ doctorID, isOpen, onClose }) {
  const [originalPassInput, setOriginalPassInput] = useState("");
  const [newPassInput, setNewPassInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [originalShow, setOriginalShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const [error, setError] = useState("");

  const toast = useToast();

  const handleOrigChange = (e) => {
    setOriginalPassInput(e.target.value);
    setError("");
  };

  const handleNewChange = (e) => {
    setNewPassInput(e.target.value);
    setError("");
  };

  const handleClose = () => {
    setOriginalPassInput("");
    setNewPassInput("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassInput.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (originalPassInput !== newPassInput) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      console.log(doctorID);
      console.log(originalPassInput);
      console.log(newPassInput);
      // TODO: Change/Update the Password of the Doctor using PUT
      const response = await updatePassSimulate();
      const message = response.message;
      toast({ title: message, status: "success" });
      onClose();
    } catch (err) {
      console.log(err);
      setError("Incorrect original password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Diagnosis</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isRequired mt="12px" isInvalid={Boolean(error)}>
              <FormLabel>Original Password</FormLabel>
              <InputGroup>
                <Input
                  type={originalShow ? "text" : "password"}
                  name="originalPass"
                  maxLength={20}
                  value={originalPassInput}
                  onChange={handleOrigChange}
                  mb="12px"
                />
                <InputRightElement>
                  <IconButton
                    icon={originalShow ? <IconEye /> : <IconEyeClosed />}
                    onClick={() => setOriginalShow(!originalShow)}
                  />
                </InputRightElement>
              </InputGroup>
              <FormLabel>New Password</FormLabel>
              <InputGroup>
                <Input
                  type={newShow ? "text" : "password"}
                  name="newPass"
                  maxLength={20}
                  value={newPassInput}
                  onChange={handleNewChange}
                  mb="12px"
                />
                <InputRightElement>
                  <IconButton
                    icon={newShow ? <IconEye /> : <IconEyeClosed />}
                    onClick={() => setNewShow(!newShow)}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <FormErrorIcon />
                {error}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack>
              <Button onClick={handleClose}>Close</Button>
              <Button type="submit" isLoading={isLoading}>
                Change Password
              </Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

ChangePassModal.propTypes = {
  doctorID: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const updatePassSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    message: "Password sucessfully changed",
  };
  return mockData;
};
