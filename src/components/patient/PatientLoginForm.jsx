import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { initPatientLoginInfo } from "../../utils/formUtils";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import axios from "axios";

export default function PatientLoginForm({ setPatientData }) {
  const [formData, setFormData] = useState(initPatientLoginInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [show, setShow] = useState(false);
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/patient/login",
        formData
      );
      const data = response.data;
      setPatientData(data);
    } catch (err) {
      const messaage = err.response.data;
      setErrorMsg(messaage);
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
        <FormControl isRequired isInvalid={!!errorMsg}>
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
          <FormErrorMessage>
            <FormErrorIcon />
            {errorMsg}
          </FormErrorMessage>
        </FormControl>
        <Box textAlign="center">
          <Button
            isLoading={isLoading}
            loadingText="Logging in"
            type="submit"
            colorScheme="blue"
          >
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
