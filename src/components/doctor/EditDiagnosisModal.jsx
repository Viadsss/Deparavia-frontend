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
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { doctorDashboardRowsUpdateDiagnosis } from "../../utils/tableUtils";

export default function EditDiagnosisModal({
  admissionID,
  doctorID,
  diagnosis,
  isOpen,
  onClose,
  handleDataUpdate,
}) {
  const [input, setInput] = useState(diagnosis || "");

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
        <ModalHeader>Update Diagnosis</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isRequired>
              <Textarea
                type="text"
                maxLength={100}
                value={input}
                resize="vertical"
                height="10rem"
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button type="submit">Update</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

EditDiagnosisModal.propTypes = {
  admissionID: PropTypes.string.isRequired,
  doctorID: PropTypes.string.isRequired,
  diagnosis: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const updateTableSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorDashboardRowsUpdateDiagnosis,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Diagnosis Updated",
    description: "The patient's diagnosis has been successfully updated.",
  },
  error: {
    title: "Failed to Update Diagnosis",
    description: "There was an error updating the diagnosis. Please try again.",
  },
  loading: {
    title: "Updating Diagnosis",
    description: "Please wait while the diagnosis is being updated.",
  },
};
