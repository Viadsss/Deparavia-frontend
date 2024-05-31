import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { initDoctorForm } from "../../../utils/formUtils";
import { doctorRowsInsert } from "../../../utils/tableUtils";
import PropTypes from "prop-types";
import { validateDoctorInfo } from "../../../utils/formErrorUtils";

export default function AddDrawer({ isOpen, onClose, handleDoctorUpdate }) {
  const [formData, setFormData] = useState(initDoctorForm);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(initDoctorForm);
  const firstField = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    const newErrors = validateDoctorInfo(formData);
    const hasError = Object.keys(newErrors).length > 0;
    setErrors(newErrors);

    if (hasError) {
      setIsLoading(false);
      return;
    }

    setFormData(initDoctorForm);
    try {
      // TODO: POST Request to insert doctor Table
      // and it returns the updated doctor Table
      // smth like post: (url) then replace the fetch to the simulation
      handleDoctorUpdate(addDoctorSimulate, toastDetails);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <form onSubmit={handleSubmit}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add New Doctor</DrawerHeader>

          <DrawerBody>
            <FormControl isRequired isInvalid={!!errors.doctorName}>
              <FormLabel>Doctor Name</FormLabel>
              <Input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                ref={firstField}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.doctorName}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Start Time</FormLabel>
              <Input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>End time</FormLabel>
              <Input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
}

const addDoctorSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorRowsInsert,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Doctor Added",
    description: "The new doctor has been successfully added!",
  },
  error: {
    title: "Failed to Add Doctor",
    description: "There was an error adding the doctor. Please try again.",
  },
  loading: {
    title: "Adding Doctor",
    description: "Please wait while the doctor is being added.",
  },
};

AddDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDoctorUpdate: PropTypes.func.isRequired,
};
