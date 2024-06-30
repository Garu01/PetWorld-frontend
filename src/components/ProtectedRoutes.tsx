import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAdmin: boolean;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAdmin,
  children,
}) => {
  if (!isAdmin) {
    return <Navigate to="/not-authorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
