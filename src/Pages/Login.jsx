import React, { useEffect } from "react";

export function Login() {
  useEffect(() => {
    localStorage.setItem("logado", true);
  }, []);

  return (
    <>
      <h1>Para continuar você precisa fazer login</h1>
    </>
  );
}
