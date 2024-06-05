import DataTable from "react-data-table-component";
import { patientColumns } from "../../../utils/tableUtils";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PatientRowDetails from "./PatientRowDetails";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { filterPatientData } from "../../../utils/funcUtils";
import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

export default function PatientRecord({ theme }) {
  const [isPending, setIsPending] = useState(true);
  const [patientData, setPatientData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPatientData();
  }, []);

  const getPatientData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/patients"
      );
      const data = response.data;
      setPatientData(data);
      setFilteredData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value.toLowerCase();
    const newRows = filterPatientData(patientData, search);
    setFilteredData(newRows);
  };

  return (
    <DataTable
      theme={theme}
      columns={patientColumns}
      data={filteredData}
      progressPending={isPending}
      fixedHeader
      pagination
      highlightOnHover
      pointerOnHover
      expandableRows
      expandOnRowClicked
      expandableRowsComponent={({ data }) => <PatientRowDetails data={data} />}
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

PatientRecord.propTypes = {
  theme: PropTypes.string.isRequired,
};
