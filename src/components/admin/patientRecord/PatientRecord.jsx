import DataTable from "react-data-table-component";
import { patientColumns, patientRows } from "../../../utils/tableUtils";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PatientRowDetails from "./PatientRowDetails";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { filterPatientData } from "../../../utils/funcUtils";
import { IconSearch } from "@tabler/icons-react";

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
      const response = await simulateGetPatients();
      const data = response.data;
      setPatientData(data);
      setFilteredData(data);
    } catch (err) {
      console.log(err);
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

const simulateGetPatients = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: patientRows,
    message: "get admissions successfully",
  };
  return mockData;
};

PatientRecord.propTypes = {
  theme: PropTypes.string.isRequired,
};
