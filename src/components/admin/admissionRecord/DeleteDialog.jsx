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
import { mockRows3 } from "../../../utils/tableUtils";

export default function DeleteDialog({
  data,
  isOpen,
  onClose,
  handleDataUpdate,
}) {
  const cancelRef = useRef();

  const handleDelete = async () => {
    onClose();
    console.log(data.admissionID);
    handleDataUpdate(deleteAdmission, toastDetails);
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
            Delete Admission
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

DeleteDialog.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const deleteAdmission = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: mockRows3,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Admission Deleted",
    description: "The admission has been successfully deleted.",
  },
  error: {
    title: "Delete Failed",
    description:
      "An error occurred while deleting the admission. Please try again.",
  },
  loading: {
    title: "Deleting Admission...",
    description: "Please wait while the admission is being deleted.",
  },
};
