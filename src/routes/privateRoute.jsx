import React from "react";

import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const user = localStorage.getItem("logado");

  return user ? children : <Navigate to="/login" />;
}

// ! Primeiro Video do Canal
