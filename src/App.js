import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { AdicionarUsuario } from "./screens/AdicionarUsuario";
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<AdicionarUsuario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
