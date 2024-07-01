import { Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Output1() {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);
  const theme = useColorModeValue("chakraLight", "chakraDark");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/admin/visitors"
      );
      setData(response.data);
    } catch (err) {
      console.error(err.response.data);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <DataTable
      theme={theme}
      columns={visitorColumns}
      data={data}
      progressPending={isPending}
      pagination
      highlightOnHover
      pointerOnHover
      expandableRows
      expandOnRowClicked
      expandableRowsComponent={({ data }) => (
        <>
          <Text>
            <b>visitorID:</b> {data.visitorID}
          </Text>
          <Text>
            <b>visitorDate:</b> {format(data.visitorDate, "yyyy-MM-dd")}
          </Text>
        </>
      )}
    />
  );
}

const visitorColumns = [
  { name: "Visitor ID", selector: (row) => row.visitorID, sortable: true },
  {
    name: "Patient ID",
    selector: (row) => row.patientID,
    sortable: true,
  },
  {
    name: "Date of Visit",
    selector: (row) => format(row.visitorDate, "yyyy-MM-dd"),
    sortable: true,
  },
  {
    name: "Visitor Name",
    selector: (row) => row.visitorName,
    sortable: true,
  },
  {
    name: "Relationship",
    selector: (row) => row.visitorRelationship,
  },
  { name: "Contact Number", selector: (row) => row.visitorContactNumber },
];
