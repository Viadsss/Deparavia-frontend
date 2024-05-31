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
import { doctorRowsUpdate } from "../../../utils/tableUtils";

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
    console.log(data.doctorID);
    const newFormData = {
      startTime: formData.startTime.concat(":00"),
      endTime: formData.endTime.concat(":00"),
    };
    console.log("New Form Data", newFormData);
    // TODO: PUT Request to update doctor Table to change the shift
    // and it returns the updated doctor Table
    // smth like put: (url, id) then replace the fetch to the simulation
    setFormData(initDoctorShiftForm);
    handleDoctorUpdate(updateDoctorSimulate, toastDetails);
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
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                ref={firstField}
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

const updateDoctorSimulate = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorRowsUpdate,
    message: "get admissions successfully",
  };
  return mockData;
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
