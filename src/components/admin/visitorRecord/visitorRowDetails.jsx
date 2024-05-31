import { Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import PropTypes from "prop-types";

export default function VisitorRowDetails({ data }) {
  return (
    <>
      <Box py="12px">
        <Text>
          <strong>visitor ID:</strong> {data.visitorID}
        </Text>
        <Text>
          <strong>Patient ID:</strong> {data.patientID}
        </Text>
        <Text>
          <strong>Date of Visit:</strong>{" "}
          {format(data.visitorDate, "MMMM d, yyyy")}
        </Text>
        <Text>
          <strong>Visitor Name:</strong> {data.visitorName}
        </Text>
        <Text>
          <strong>Relationship:</strong> {data.visitorRelationship}
        </Text>
        <Text>
          <strong>Contact Number:</strong> {data.visitorContactNumber}
        </Text>
      </Box>
    </>
  );
}

VisitorRowDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
