import { useState } from "react";
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
import { initPatientLoginInfo, mockPatientData } from "../../utils/formUtils";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export default function PatientLoginForm({ setPatientData }) {
  const [formData, setFormData] = useState(initPatientLoginInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "patientID" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: POST (Check Pass and ID to the Database) and get the Data of Patient
      const response = await simulateGetPatientData();
      const data = response.data;
      setPatientData(data);
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
          <FormLabel>Patient ID</FormLabel>
          <Input
            type="text"
            name="patientID"
            placeholder="PAT-XX-XXX"
            maxLength={10}
            value={formData.patientID}
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

PatientLoginForm.propTypes = {
  setPatientData: PropTypes.func.isRequired,
};

const simulateGetPatientData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    data: mockPatientData,
    message: "get patient data successfully",
  };
  return mockData;
};
