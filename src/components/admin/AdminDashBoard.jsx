import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { doctorRows } from "../../utils/tableUtils";
import AdmissionRecord from "./admissionRecord/AdmissionRecord";
import DoctorRecord from "./doctorRecord/DoctorRecord";
import PatientRecord from "./patientRecord/PatientRecord";
import { filterDoctorData } from "../../utils/funcUtils";
import VisitorRecord from "./visitorRecord/VisitorRecord";
import { IconLogout } from "@tabler/icons-react";

export default function AdminDashBoard({ setIsLogin }) {
  const [doctorData, setDoctorData] = useState([]);
  const [doctorFilteredData, setDoctorFilteredData] = useState([]);
  const [doctorSearchTerm, setDoctorSearchTerm] = useState("");
  const [isPendingDoctor, setIsPendingDoctor] = useState(true);

  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");
  const theme = useColorModeValue("chakraLight", "chakraDark");
  const toast = useToast();

  useEffect(() => {
    getDoctorData();
  }, []);

  const handleLogOut = () => {
    setIsLogin(false);
  };

  const getDoctorData = async () => {
    try {
      const response = await simulateGetDoctors();
      const data = response.data;
      setDoctorData(data);
      setDoctorFilteredData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsPendingDoctor(false);
    }
  };

  const handleDoctorUpdate = async (simulate, toastDetails) => {
    const fetchDoctorTable = async () => {
      const response = await simulate();
      const data = response.data;
      console.log(data);
      setDoctorData(data);
      setDoctorFilteredData(data);
      setDoctorSearchTerm("");
    };

    // Refetch admission data after successful PUT request
    try {
      toast.promise(fetchDoctorTable(), toastDetails);
    } catch (err) {
      console.error("Error fetching admissions:", err);
    }
  };

  const handleDoctorSearch = (e) => {
    setDoctorSearchTerm(e.target.value);
    const search = e.target.value.toLowerCase();
    const newRows = filterDoctorData(doctorData, search);
    setDoctorFilteredData(newRows);
  };

  return (
    <>
      <Box>
        <Button leftIcon={<IconLogout />} onClick={handleLogOut} mb="16px">
          Log out
        </Button>
        <Box
          py="1rem"
          bg={bgCard}
          border="1px"
          borderColor={borderCard}
          rounded="lg"
        >
          <Tabs isFitted>
            <TabList flexWrap="wrap">
              <Tab>Admission Record</Tab>
              <Tab>Doctor Record</Tab>
              <Tab>Patient Record</Tab>
              <Tab>Visitor Record</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AdmissionRecord theme={theme} doctorData={doctorData} />
              </TabPanel>
              <TabPanel>
                <DoctorRecord
                  theme={theme}
                  doctorData={doctorFilteredData}
                  isPending={isPendingDoctor}
                  handleDoctorUpdate={handleDoctorUpdate}
                  searchTerm={doctorSearchTerm}
                  handleSearch={handleDoctorSearch}
                />
              </TabPanel>
              <TabPanel>
                <PatientRecord theme={theme} />
              </TabPanel>
              <TabPanel>
                <VisitorRecord theme={theme} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

AdminDashBoard.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

// Simulating API functions

const simulateGetDoctors = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: doctorRows,
    message: "get doctors successfully",
  };

  return mockData;
};
