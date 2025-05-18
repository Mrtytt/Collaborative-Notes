// src/components/ProtectedRoute.tsx
import React, { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthorized } from "../services/auth";

const ProtectedRoute: React.FC = () => {
  console.log("ProtectedRoute");
  console.log("isAuthorized", isAuthorized());
  if (!isAuthorized()) {
    return <Navigate to="/404" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
