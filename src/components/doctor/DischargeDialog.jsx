import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import PropTypes from "prop-types";
import { doctorDashboardRowsUpdateDischarge } from "../../utils/tableUtils";

export default function DischargeDialog({
  admissionID,
  doctorID,
  isOpen,
  onClose,
  handleDataUpdate,
}) {
  const cancelRef = useRef();

  const handleDischarge = async () => {
    console.log(admissionID);
    console.log(doctorID);
    handleDataUpdate(updateTableSimulate, toastDetails);
    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontWeight="bold">
            Discharge Patient
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDischarge} ml={3}>
              Discharge
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

DischargeDialog.propTypes = {
  admissionID: PropTypes.string.isRequired,
  doctorID: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const updateTableSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorDashboardRowsUpdateDischarge,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Patient Discharged",
    description: "The patient has been successfully discharged.",
  },
  error: {
    title: "Failed to Discharge Patient",
    description:
      "There was an error discharging the patient. Please try again.",
  },
  loading: {
    title: "Discharging Patient",
    description: "Please wait while the patient is being discharged.",
  },
};
