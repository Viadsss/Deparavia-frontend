import { useEffect, useState } from "react";
import { patientDashBoardAdmissionsColumns } from "../../utils/tableUtils";
import { filterPatientAdmissionsData } from "../../utils/funcUtils";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import PatientRowDetails from "./PatientRowDetails";
import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

export default function AdmissionsTable({ patientID }) {
  const [isPending, setIsPending] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useColorModeValue("chakraLight", "chakraDark");

  useEffect(() => {
    getTableData(patientID);
  }, [patientID]);

  const getTableData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/patient/${id}/admissions`
      );
      const data = response.data;
      setTableData(data);
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
    const newRows = filterPatientAdmissionsData(tableData, search);
    setFilteredData(newRows);
  };

  return (
    <DataTable
      theme={theme}
      columns={patientDashBoardAdmissionsColumns}
      data={filteredData}
      progressPending={isPending}
      title="Admission History"
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

AdmissionsTable.propTypes = {
  patientID: PropTypes.string.isRequired,
};
