import { Badge, Box, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons-react";
import PropTypes from "prop-types";
import EditDrawer from "./EditDrawer";
import { convertTimeString } from "../../../utils/funcUtils";

export default function DoctorRowDetails({ data, handleDoctorUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  return (
    <>
      <Box py="12px">
        {data.dutyStatus == "On Duty" ? (
          <Badge colorScheme="green" fontSize="sm">
            {data.dutyStatus}
          </Badge>
        ) : (
          <Badge colorScheme="blue" fontSize="sm">
            {data.dutyStatus}
          </Badge>
        )}
        <Text>
          <strong>Doctor ID:</strong> {data.doctorID}
        </Text>
        <Text>
          <strong>Name:</strong> {data.doctorName}
        </Text>
        <Text>
          <strong>Shift:</strong> {convertTimeString(data.doctorStartTime)} -{" "}
          {convertTimeString(data.doctorEndTime)}
        </Text>
        <IconButton onClick={handleEdit} icon={<IconEdit />} mt="8px" />
      </Box>
      <EditDrawer
        data={data}
        isOpen={isOpen}
        onClose={onClose}
        handleDoctorUpdate={handleDoctorUpdate}
      />
    </>
  );
}

DoctorRowDetails.propTypes = {
  data: PropTypes.object.isRequired,
  handleDoctorUpdate: PropTypes.func.isRequired,
};
