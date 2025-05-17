// src/components/ProtectedRoute.tsx
import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { isAuthorized } from "../services/auth";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  if (!isAuthorized()) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
