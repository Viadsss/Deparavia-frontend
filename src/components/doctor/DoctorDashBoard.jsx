import { Badge, Box, Button, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PatientsTable from "./PatientsTable";
import { IconLogout } from "@tabler/icons-react";

export default function DoctorDashboard({ doctorData, handleLogOut }) {
  return (
    <Box>
      <Box>
        <Heading as="h2">Welcome {doctorData.doctorName}!</Heading>
        <Badge>{doctorData.doctorID}</Badge>
      </Box>
      <Button leftIcon={<IconLogout />} onClick={handleLogOut} my="16px">
        Log out
      </Button>
      <PatientsTable doctorID={doctorData.doctorID} />
    </Box>
  );
}

DoctorDashboard.propTypes = {
  doctorData: PropTypes.object.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
