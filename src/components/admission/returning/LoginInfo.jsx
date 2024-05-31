import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function LoginInfo({
  loginFormData,
  setLoginFormData,
  setFormData,
  handleNextStep,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: name === "patientID" ? value.toUpperCase() : value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormData((prevData) => ({ ...prevData, ...loginFormData }));
    console.log(loginFormData);
    try {
      // TODO: POST (Check Pass and ID to the Database) and check if successful
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleNextStep();
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
        <FormControl isRequired mt="12px">
          <FormLabel>Patient ID</FormLabel>
          <Input
            type="text"
            name="patientID"
            placeholder="PAT-XX-XXX"
            maxLength={10}
            value={loginFormData.patientID}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt="12px">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            maxLength={20}
            value={loginFormData.password}
            onChange={handleChange}
          />
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
