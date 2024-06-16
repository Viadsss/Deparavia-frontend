import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { doctorColumns } from "../../../utils/tableUtils";
import DoctorRowDetails from "./DoctorRowDetails";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { IconSearch, IconUserPlus } from "@tabler/icons-react";
import AddDrawer from "./AddDrawer";

export default function DoctorRecord({
  theme,
  doctorData,
  isPending,
  handleDoctorUpdate,
  searchTerm,
  handleSearch,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <DataTable
        theme={theme}
        columns={doctorColumns}
        data={doctorData}
        progressPending={isPending}
        fixedHeader
        pagination
        highlightOnHover
        pointerOnHover
        expandableRows
        expandOnRowClicked
        expandableRowsComponent={({ data }) => (
          <DoctorRowDetails
            data={data}
            handleDoctorUpdate={handleDoctorUpdate}
          />
        )}
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <>
            <IconButton
              onClick={handleClick}
              colorScheme="green"
              icon={<IconUserPlus />}
              mb="12px"
            />
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
      <AddDrawer
        isOpen={isOpen}
        onClose={onClose}
        handleDoctorUpdate={handleDoctorUpdate}
      />
    </>
  );
}

DoctorRecord.propTypes = {
  theme: PropTypes.string.isRequired,
  doctorData: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
  handleDoctorUpdate: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
