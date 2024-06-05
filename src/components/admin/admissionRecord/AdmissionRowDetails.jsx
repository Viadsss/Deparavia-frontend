import {
  Badge,
  Box,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconEdit, IconTrashX } from "@tabler/icons-react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import EditDrawer from "./EditDrawer";
import DeleteDialog from "./DeleteDialog";

export default function AdmissionRowDetails({
  data,
  doctorData,
  handleDataUpdate,
}) {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const handleEdit = () => {
    onOpenEdit();
  };

  const handleDelete = () => {
    onOpenDelete();
  };

  return (
    <>
      <Box py="12px">
        {data.dischargeDate ? (
          <Badge colorScheme="green" fontSize="sm">
            Discharged
          </Badge>
        ) : (
          <Badge colorScheme="blue" fontSize="sm">
            Admitted
          </Badge>
        )}
        <Text>
          <strong>Admission ID:</strong> {data.admissionID}
        </Text>
        <Text>
          <strong>Patient ID:</strong> {data.patientID}
        </Text>
        <Text>
          <strong>Doctor ID:</strong> {data.doctorID || "No in-charge doctor"}
        </Text>
        <Text>
          <strong>Admission Date:</strong>{" "}
          {format(data.admissionDate, "MMMM d, yyyy")}
        </Text>
        <Text>
          <strong>Discharge Date:</strong>{" "}
          {data.dischargeDate
            ? format(data.dischargeDate, "MMMM d, yyyy")
            : "Not yet discharged"}
        </Text>
        <Box>
          <strong>Complaints:</strong>
          <Text whiteSpace={"pre-line"} ml="1.5rem">
            {data.complaints}
          </Text>
        </Box>
        <Box>
          <strong>Medications:</strong>
          <Text whiteSpace={"pre-line"} ml="1.5rem">
            {data.medications || "No medications provided yet"}
          </Text>
        </Box>
        <Box>
          <strong>Procedure:</strong>
          <Text whiteSpace={"pre-line"} ml="1.5rem">
            {data.procedure || "No procedure provided yet"}
          </Text>
        </Box>
        <Box>
          <strong>Diagnosis:</strong>{" "}
          <Text whiteSpace={"pre-line"} ml="1.5rem">
            {data.diagnosis || "No diagnosis provided yet"}
          </Text>
        </Box>
        <HStack mt="8px">
          {!data.dischargeDate && (
            <IconButton onClick={handleEdit} icon={<IconEdit />} />
          )}
          <IconButton onClick={handleDelete} icon={<IconTrashX />} />
        </HStack>
      </Box>
      <EditDrawer
        data={data}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        doctorData={doctorData}
        handleDataUpdate={handleDataUpdate}
      />
      <DeleteDialog
        data={data}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        handleDataUpdate={handleDataUpdate}
      />
    </>
  );
}

AdmissionRowDetails.propTypes = {
  data: PropTypes.shape({
    admissionID: PropTypes.string.isRequired,
    patientID: PropTypes.string.isRequired,
    doctorID: PropTypes.string,
    admissionDate: PropTypes.string.isRequired,
    dischargeDate: PropTypes.string,
    complaints: PropTypes.string.isRequired,
    medications: PropTypes.string,
    procedure: PropTypes.string,
    diagnosis: PropTypes.string,
  }).isRequired,
  doctorData: PropTypes.array.isRequired,
  handleDataUpdate: PropTypes.func.isRequired,
};
