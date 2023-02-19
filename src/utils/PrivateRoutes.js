import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import NoAuthUser from "../pages/noAuthUser/NoAuthUser";

const PrivateRoutes = () => {
  const { isAdminAuth } = useAuthContext();
  // return isAdminAuth() ? <Outlet /> : <Navigate to={"/signIn"} />;
  return isAdminAuth() ? <Outlet /> : <NoAuthUser/>
};

export default PrivateRoutes;
