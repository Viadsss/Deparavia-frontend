import {
  Box,
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AdmissionRecord from "./admissionRecord/AdmissionRecord";
import DoctorRecord from "./doctorRecord/DoctorRecord";
import PatientRecord from "./patientRecord/PatientRecord";
import { filterDoctorData } from "../../utils/funcUtils";
import VisitorRecord from "./visitorRecord/VisitorRecord";
import { IconLogout } from "@tabler/icons-react";
import axios from "axios";
import MonthModal from "./MonthModal";
import YearModal from "./YearModal";

// Jhana

export default function AdminDashBoard({ setIsLogin }) {
  const [doctorData, setDoctorData] = useState([]);
  const [doctorFilteredData, setDoctorFilteredData] = useState([]);
  const [doctorSearchTerm, setDoctorSearchTerm] = useState("");
  const [isPendingDoctor, setIsPendingDoctor] = useState(true);
  const [total, setTotal] = useState(0);
  const {
    isOpen: isOpenMonth,
    onOpen: onOpenMonth,
    onClose: onCloseMonth,
  } = useDisclosure();
  const {
    isOpen: isOpenYear,
    onOpen: onOpenYear,
    onClose: onCloseYear,
  } = useDisclosure();

  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");
  const theme = useColorModeValue("chakraLight", "chakraDark");
  const toast = useToast();

  useEffect(() => {
    getDoctorData();
    getDoctorTotal();
  }, []);

  const handleLogOut = () => {
    setIsLogin(false);
  };

  const getDoctorTotal = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/doctors/total"
      );
      const data = response.data;
      const total = data.total;
      setTotal(total);
    } catch (err) {
      console.error(err);
    }
  };

  const getDoctorData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/doctors"
      );
      const data = response.data;
      setDoctorData(data);
      setDoctorFilteredData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsPendingDoctor(false);
    }
  };

  const handleDoctorUpdate = async (toastDetails) => {
    const fetchDoctorTable = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/admin/doctors"
      );
      const data = response.data;
      setDoctorData(data);
      setDoctorFilteredData(data);
      setDoctorSearchTerm("");
      getDoctorTotal();
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
        <Stack direction={{ base: "column", md: "row" }} mb="8px">
          <Button leftIcon={<IconLogout />} onClick={handleLogOut} mb="16px">
            Log out
          </Button>
          <Button onClick={onOpenMonth} colorScheme="blue">
            Monthly Overview
          </Button>
          <Button onClick={onOpenYear} colorScheme="blue">
            Yearly Overview
          </Button>
        </Stack>
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
                  total={total}
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
      <MonthModal isOpen={isOpenMonth} onClose={onCloseMonth} />
      <YearModal isOpen={isOpenYear} onClose={onCloseYear} />
    </>
  );
}

AdminDashBoard.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
