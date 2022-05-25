import React, { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { activeUser } = useContext(AuthContext);
  if (!activeUser) {
    return <Navigate to="/" replace />;
  }
  return children;
}
