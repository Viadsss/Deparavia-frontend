import {
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
} from "@chakra-ui/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

export default function LoginInfo({
  loginFormData,
  setLoginFormData,
  setFormData,
  handleNextStep,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: name === "patientID" ? value.toUpperCase() : value,
    }));
    setError("");
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormData((prevData) => ({ ...prevData, ...loginFormData }));
    console.log(loginFormData);
    try {
      // TODO: POST (Check Pass and ID to the Database) and check if successful
      await axios.post(
        "http://localhost:8080/api/admission/returning/login",
        loginFormData
      );
      handleNextStep();
    } catch (err) {
      const message = err.response.data;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading size="md" as="h3">
        I. Login
      </Heading>
      <form onSubmit={handleSumbit}>
        <FormControl isRequired mt="12px" isInvalid={Boolean(error)}>
          <FormLabel>Patient ID</FormLabel>
          <Input
            type="text"
            name="patientID"
            placeholder="PAT-XX-XXX"
            maxLength={10}
            value={loginFormData.patientID}
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              maxLength={20}
              value={loginFormData.password}
              onChange={handleChange}
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
            {error}
          </FormErrorMessage>
        </FormControl>

        <Button isLoading={isLoading} type="submit" mt="12px">
          Next
        </Button>
      </form>
    </>
  );
}

LoginInfo.propTypes = {
  loginFormData: PropTypes.object.isRequired,
  setLoginFormData: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};
