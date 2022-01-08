import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

function PrivateRoute({ children }) {
  const { user, isLoading } = useFirebase();
  const location = useLocation();
  console.log(user.email);
  if (isLoading) {
    return <Spinner animation="grow" variant="danger" />;
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
