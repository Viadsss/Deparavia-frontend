import { useEffect, useState } from "react";
import {
  patientDashBoardAdmissionsColumns,
  patientDashBoardAdmissionsRows,
} from "../../utils/tableUtils";
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
      console.log(id);
      const response = await simulateGetAdmissions();
      const data = response.data;
      console.log(data);
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

const simulateGetAdmissions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: patientDashBoardAdmissionsRows,
    message: "Get Patients for this doctor successfully",
  };

  return mockData;
};
