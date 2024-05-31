import { useState } from "react";
import { initDoctorLoginInfo, mockDoctorData } from "../../utils/formUtils";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export default function DoctorLoginForm({ setDoctorData }) {
  const [formData, setFormData] = useState(initDoctorLoginInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "doctorID" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: POST (Check Pass and ID to the Database) and get the Data of Doctor
      const response = await simulateGetDoctorData();
      const data = response.data;
      setDoctorData(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Heading as="h2" textAlign="center" mb="24px">
        Log in
      </Heading>
      <Box
        as="form"
        onSubmit={handleSubmit}
        bg={bgCard}
        border="1px"
        borderColor={borderCard}
        p={"24px"}
        rounded="lg"
        maxWidth="900px"
        mx="auto"
      >
        <FormControl isRequired>
          <FormLabel>Doctor ID</FormLabel>
          <Input
            type="text"
            name="doctorID"
            placeholder="DOC-XX-XXX"
            maxLength={10}
            value={formData.doctorID}
            onChange={handleChange}
            mb="12px"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              maxLength={20}
              value={formData.password}
              onChange={handleChange}
              mb="12px"
            />
            <InputRightElement>
              <IconButton
                icon={show ? <IconEye /> : <IconEyeClosed />}
                onClick={() => setShow(!show)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box textAlign="center">
          <Button isLoading={isLoading} loadingText="Logging in" type="submit">
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

DoctorLoginForm.propTypes = {
  setDoctorData: PropTypes.func.isRequired,
};

const simulateGetDoctorData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: mockDoctorData,
    message: "get doctor data successfully",
  };
  return mockData;
};
