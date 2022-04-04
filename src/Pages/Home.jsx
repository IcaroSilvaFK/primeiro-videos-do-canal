import React from "react";

import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => navigate("/logado")}>Ir para Logado</button>
    </>
  );
}
