import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { initNewAdmissionForm } from "../../../utils/formUtils";

export default function PasswordInfo({
  passwordFormData,
  setPasswordFormData,
  formData,
  setFormData,
  setNewUserData,
  handleBackStep,
  handleNextStep,
}) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateFetchGet = async (formData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockData = {
      message: "patient creaated successfully",
      patientID: "PAT-JV-001",
      firstName: "John Paul",
      lastName: "Viado",
      middleName: "Padua",
      contents: formData,
    };

    return mockData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedFormData = { ...formData, ...passwordFormData };
    setFormData(updatedFormData);
    console.log(passwordFormData);

    try {
      // TODO: POST (Insert Admisison to the Admission + Patient Database)
      // and get the Patient Details for the ID
      const response = await simulateFetchGet(updatedFormData);
      console.log(response);
      setFormData(initNewAdmissionForm);
      setNewUserData(response);
      handleNextStep();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading as="h3" size="md">
        IV. Password Information
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mt="12px">
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              maxLength={20}
              value={passwordFormData.password}
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
        <HStack mt="12px">
          <Button onClick={handleBackStep}>Back</Button>
          <Button isLoading={isLoading} type="submit">
            Submit
          </Button>
        </HStack>
      </form>
    </>
  );
}

PasswordInfo.propTypes = {
  passwordFormData: PropTypes.object.isRequired,
  setPasswordFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  setNewUserData: PropTypes.func.isRequired,
  handleBackStep: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};
