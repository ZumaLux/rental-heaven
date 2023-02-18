import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const PrivateRoutes = () => {
  const { isAdminAuth } = useAuthContext();
  return isAdminAuth() ? <Outlet /> : <Navigate to={"/signIn"} />;
};

export default PrivateRoutes;
