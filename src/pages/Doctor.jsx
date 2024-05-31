import { useState } from "react";
import DoctorLoginForm from "../components/doctor/DoctorLoginForm";
import DoctorDashboard from "../components/doctor/DoctorDashBoard";

export default function Doctor() {
  const [doctorData, setDoctorData] = useState(null);

  const handleLogOut = () => {
    console.log(doctorData);
    setDoctorData(null);
  };

  return (
    <>
      {doctorData ? (
        <DoctorDashboard doctorData={doctorData} handleLogOut={handleLogOut} />
      ) : (
        <DoctorLoginForm setDoctorData={setDoctorData} />
      )}
    </>
  );
}
