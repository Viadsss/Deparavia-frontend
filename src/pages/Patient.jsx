import { useState } from "react";
import PatientLoginForm from "../components/patient/PatientLoginForm";
import PatientDashboard from "../components/patient/PatientDashBoard";

export default function Patient() {
  const [patientData, setPatientData] = useState(null);

  const handleLogOut = () => {
    setPatientData(null);
  };

  return (
    <>
      {patientData ? (
        <PatientDashboard
          patientData={patientData}
          handleLogOut={handleLogOut}
          setPatientData={setPatientData}
        />
      ) : (
        <PatientLoginForm setPatientData={setPatientData} />
      )}
    </>
  );
}
