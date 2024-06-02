import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  Input,
  useToast,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { admissionColumns, admissionRows } from "../../../utils/tableUtils";
import PropTypes from "prop-types";
import AdmissionRowDetails from "./AdmissionRowDetails";
import { filterAdmissionData } from "../../../utils/funcUtils";
import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

export default function AdmissionRecord({ theme, doctorData }) {
  const [isPending, setIsPending] = useState(true);
  const [admissionData, setAdmissionData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toast = useToast();

  useEffect(() => {
    getAdmissionData();
  }, []);

  const getAdmissionData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/admissions"
      );
      const data = response.data;
      setAdmissionData(data);
      setFilteredData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  const handleDataUpdate = async (toastDetails) => {
    const fetchAdmissionsData = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/admin/admissions"
      );
      const data = response.data;
      setAdmissionData(data);
      setFilteredData(data);
      setSearchTerm("");
    };

    // Refetch admission data after successful PUT request
    try {
      toast.promise(fetchAdmissionsData(), toastDetails);
    } catch (err) {
      console.error("Error fetching admissions:", err);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value.toLowerCase();
    const newRows = filterAdmissionData(admissionData, search);
    setFilteredData(newRows);
  };

  return (
    <DataTable
      theme={theme}
      columns={admissionColumns}
      data={filteredData}
      progressPending={isPending}
      fixedHeader
      pagination
      highlightOnHover
      pointerOnHover
      expandableRows
      expandOnRowClicked
      expandableRowsComponent={({ data }) => (
        <AdmissionRowDetails
          data={data}
          doctorData={doctorData}
          handleDataUpdate={handleDataUpdate}
        />
      )}
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
        <InputGroup>
          <InputLeftElement width="3rem">
            <IconSearch />
          </InputLeftElement>
          <Input
            pl="3rem"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>
      }
    />
  );
}

AdmissionRecord.propTypes = {
  theme: PropTypes.string.isRequired,
  doctorData: PropTypes.array.isRequired,
};
