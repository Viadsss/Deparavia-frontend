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
  Textarea,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { doctorDashboardRowsUpdateProcedure } from "../../utils/tableUtils";

export default function EditProcedureModal({
  admissionID,
  doctorID,
  procedure,
  isOpen,
  onClose,
  handleDataUpdate,
}) {
  const [input, setInput] = useState(procedure || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    console.log(doctorID);
    console.log(admissionID);

    handleDataUpdate(updateTableSimulate, toastDetails);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Procedure</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isRequired>
              <Textarea
                type="text"
                maxLength={150}
                value={input}
                resize="vertical"
                height="10rem"
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack>
              <Button onClick={onClose}>Close</Button>
              <Button type="submit">Update</Button>
            </HStack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

EditProcedureModal.propTypes = {
  admissionID: PropTypes.string.isRequired,
  doctorID: PropTypes.string.isRequired,
  procedure: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const updateTableSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorDashboardRowsUpdateProcedure,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Procedure Updated",
    description: "The procedure has been successfully updated.",
  },
  error: {
    title: "Failed to Update Procedure",
    description: "There was an error updating the procedure. Please try again.",
  },
  loading: {
    title: "Updating Procedure",
    description: "Please wait while the procedure is being updated.",
  },
};
