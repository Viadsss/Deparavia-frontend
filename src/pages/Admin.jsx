import { useState } from "react";
import AdminLoginForm from "../components/admin/AdminLoginForm";
import AdminDashBoard from "../components/admin/AdminDashBoard";

export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <AdminDashBoard setIsLogin={setIsLogin} />
      ) : (
        <AdminLoginForm setIsLogin={setIsLogin} />
      )}
    </>
  );
}
