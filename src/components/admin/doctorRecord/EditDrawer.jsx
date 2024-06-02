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
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { initDoctorShiftForm } from "../../../utils/formUtils";
import axios from "axios";

export default function EditDrawer({
  data,
  isOpen,
  onClose,
  handleDoctorUpdate,
}) {
  const [formData, setFormData] = useState(initDoctorShiftForm);
  const firstField = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:8080/api/admin/doctors/${data.doctorID}`,
      formData
    );
    setFormData(initDoctorShiftForm);
    handleDoctorUpdate(toastDetails);
    onClose();
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
          <DrawerHeader borderBottomWidth="1px">Edit Shift</DrawerHeader>

          <DrawerBody>
            <FormControl isRequired>
              <FormLabel>Start Time</FormLabel>
              <Input
                type="time"
                name="doctorStartTime"
                value={formData.doctorStartTime}
                onChange={handleChange}
                ref={firstField}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>End time</FormLabel>
              <Input
                type="time"
                name="doctorEndTime"
                value={formData.doctorEndTime}
                onChange={handleChange}
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
}

EditDrawer.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDoctorUpdate: PropTypes.func.isRequired,
};

const toastDetails = {
  success: {
    title: "Doctor Shift Updated",
    description: "The selected doctor's shift has been successfully updated.",
  },
  error: {
    title: "Update Failed",
    description:
      "An error occurred while updating the doctor's shift. Please try again.",
  },
  loading: {
    title: "Updating Doctor Shift...",
    description: "Please wait while the doctor's shift is being updated.",
  },
};
