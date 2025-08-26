import React from "react";

import { Navigate } from "react-router-dom";
const AdminRoutes = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (!isAdmin) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return children;
};

export default AdminRoutes;
