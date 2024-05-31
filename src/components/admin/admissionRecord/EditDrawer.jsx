import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { mockRows2 } from "../../../utils/tableUtils";

export default function EditDrawer({
  data,
  isOpen,
  onClose,
  doctorData,
  handleDataUpdate,
}) {
  const [selectedDoctor, setSelectedDoctor] = useState(data.doctorID || "");
  const firstField = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    console.log(selectedDoctor);
    if (selectedDoctor != data.doctorID && selectedDoctor != "")
      // TODO: PUT Request to update admission Table to add doctorID to that admission
      // and it returns the updated admission Table
      // smth like put: (url, id) then replace the fetch to the simulation
      handleDataUpdate(addDoctorToPatient, toastDetails);
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
          <DrawerHeader borderBottomWidth="1px">Assign Doctor</DrawerHeader>

          <DrawerBody>
            <Select
              placeholder="Select a doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              ref={firstField}
            >
              {doctorData.map((doctor) => (
                <option key={doctor.doctorID} value={doctor.doctorID}>
                  {doctor.doctorName}
                </option>
              ))}
            </Select>
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
  doctorData: PropTypes.array.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};

const addDoctorToPatient = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: mockRows2,
    message: "get admissions successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Doctor Assigned",
    description: "The doctor has been successfully assigned to the patient.",
  },
  error: {
    title: "Assignment Failed",
    description:
      "An error occurred while assigning the doctor. Please try again.",
  },
  loading: {
    title: "Assigning Doctor",
    description: "The doctor is being assigned. Please wait...",
  },
};
