import DataTable from "react-data-table-component";
import { visitorColumns } from "../../../utils/tableUtils";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InputGroup, InputLeftElement, Input, Text } from "@chakra-ui/react";
import { filterVisitorData } from "../../../utils/funcUtils";
import VisitorRowDetails from "./visitorRowDetails";
import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

export default function VisitorRecord({ theme }) {
  const [isPending, setIsPending] = useState(true);
  const [visitorData, setVisitorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getVisitorData();
    getVisitorTotal();
  }, []);


  const getVisitorTotal = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/visitors/total"
      );
      const data = response.data;
      const total = data.total;
      setTotal(total);
    } catch (err) {
      console.error(err);
    }
  };

  const getVisitorData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/visitors"
      );
      const data = response.data;
      setVisitorData(data);
      setFilteredData(data);
    } catch (err) {
      console.error(err.response.data);
    } finally {
      setIsPending(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value.toLowerCase();
    const newRows = filterVisitorData(visitorData, search);
    setFilteredData(newRows);
  };

  return (
    <DataTable
      theme={theme}
      columns={visitorColumns}
      data={filteredData}
      progressPending={isPending}
      fixedHeader
      pagination
      highlightOnHover
      pointerOnHover
      expandableRows
      expandOnRowClicked
      expandableRowsComponent={({ data }) => <VisitorRowDetails data={data} />}
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={
        <>
          <Text size="md" mb="4px">
            Total Visitors: <b>{total}</b>
          </Text>
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
        </>
      }
    />
  );
}

VisitorRecord.propTypes = {
  theme: PropTypes.string.isRequired,
};
