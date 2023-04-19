import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { AdicionarUsuario } from "./screens/AdicionarUsuario";
import { Victor } from "./screens/Victor";
import { Matheus } from "./screens/Matheus";
import { Nathalia } from "./screens/Nathalia";
import { Vinicius } from "./screens/Vinicius";
import { Rebeca } from "./screens/Rebeca";
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<AdicionarUsuario />} />
          <Route path="/victor" element={<Victor />} />
          <Route path="/matheus" element={<Matheus />} />
          <Route path="/nathalia" element={<Nathalia />} />
          <Route path="/vinicius" element={<Vinicius />} />
          <Route path="/rebeca" element={<Rebeca />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
