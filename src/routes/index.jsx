import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Logado } from "../Pages/Logado";
import { Login } from "../Pages/Login";

import { PrivateRoute } from "./privateRoute";
export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/logado"
          element={
            <PrivateRoute>
              <Logado />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
