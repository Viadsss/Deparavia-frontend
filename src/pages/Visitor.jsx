import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { initVisitorForm } from "../utils/formUtils";
import { validateVisitorInfo } from "../utils/formErrorUtils";
import { useNavigate } from "react-router-dom";

export default function Visitor() {
  const [formData, setFormData] = useState(initVisitorForm);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(initVisitorForm);
  const [idError, setIdError] = useState(null);
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.200", "gray.600");
  const navigate = useNavigate("/");

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "patientID" ? value.toUpperCase() : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    const newErrors = validateVisitorInfo(formData);
    const hasError = Object.keys(newErrors).length > 0;
    setErrors(newErrors);

    if (hasError) {
      setIsLoading(false);
      return;
    }

    handleDoctorInsert();
  };

  const doctorInsert = async () => {
    const response = await simulatePostVisitor();
    const data = response.message;
    console.log(data);
    setFormData(initVisitorForm);
    navigate("/");
  };

  const handleDoctorInsert = async () => {
    try {
      toast.promise(doctorInsert(), toastDetails);
    } catch (err) {
      console.error("Error doctor insert:", err);
      setIdError("The Patient ID does not exist");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Heading as="h2" mb="24px" maxWidth="900px" mx="auto">
        Visitor Form
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
          />
          <FormHelperText mb="12px">
            Patient ID of the patient you want to visit
          </FormHelperText>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.visitorName}>
          <FormLabel>Name of Visitor</FormLabel>
          <Input
            type="text"
            name="visitorName"
            value={formData.visitorName}
            onChange={handleChange}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.visitorName}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.visitorRelationship}
          mt="12px"
        >
          <FormLabel>Relationship to the Patient</FormLabel>
          <Input
            type="text"
            name="visitorRelationship"
            value={formData.visitorRelationship}
            onChange={handleChange}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.visitorRelationship}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.visitorContactNumber}
          mt="12px"
        >
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="text"
            name="visitorContactNumber"
            maxLength={11}
            value={formData.visitorContactNumber}
            onChange={handleChange}
          />
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.visitorContactNumber}
          </FormErrorMessage>
        </FormControl>
        {idError && (
          <Alert status="error" mt="12px" rounded="md">
            <AlertIcon />
            {idError}
          </Alert>
        )}
        <Button isLoading={isLoading} type="submit" mt="12px">
          Visit
        </Button>
      </Box>
    </Box>
  );
}

const simulatePostVisitor = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const mockData = {
    message: "get patient data successfully",
  };
  return mockData;
};

const toastDetails = {
  success: {
    title: "Visitor Added",
    description: "The visitor has been successfully added.",
  },
  error: {
    title: "Failed to Add Visitor",
    description: "There was an error adding the visitor. Please try again.",
  },
  loading: {
    title: "Adding Visitor",
    description: "Please wait while the visitor is being added.",
  },
};
