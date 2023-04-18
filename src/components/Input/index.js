import React from "react";
import { InputForm } from "./styles";

export function Input({ label, type, placeholder, ...rest }) {
  return (
    <>
      <InputForm type={type} placeholder={placeholder} {...rest} />
    </>
  );
}
