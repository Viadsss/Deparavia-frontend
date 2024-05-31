import { Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function PatientRowDetails({ data }) {
  return (
    <Box py="12px">
      <Text>
        <strong>Admission ID:</strong> {data.admissionID}
      </Text>
      <Text>
        <strong>Doctor Name:</strong> {data.doctorName}
      </Text>
      <Text>
        <strong>complaints:</strong> {data.doctorName}
      </Text>
      <Box>
        <strong>Complaints:</strong>
        <Text whiteSpace="preserve-breaks" marginLeft="1.5rem">
          {data.complaints}
        </Text>
      </Box>
      <Box>
        <strong>Medications:</strong>
        <Text whiteSpace="preserve-breaks" marginLeft="1.5rem">
          {data.medications ? data.medications : "No medications"}
        </Text>
      </Box>
      <Box>
        <strong>Procedure:</strong>
        <Text whiteSpace="preserve-breaks" marginLeft="1.5rem">
          {data.procedure ? data.procedure : "No Procedure"}
        </Text>
      </Box>
      <Box>
        <strong>Diagnosis:</strong>
        <Text whiteSpace="preserve-breaks" marginLeft="1.5rem">
          {data.diaagnosis ? data.diagnosis : "No Diagnosis"}
        </Text>
      </Box>
      <Text>
        <strong>Admission Date:</strong>{" "}
        {format(data.admissionDate, "MMMM d, yyyy")}
      </Text>
      <Text>
        <strong>Discharge Date:</strong>{" "}
        {format(data.dischargeDate, "MMMM d, yyyy")}
      </Text>
    </Box>
  );
}

PatientRowDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
