import React from "react";
import { ButtonComponent } from "./styles";

export function Button({ children, onClick, ...rest }) {
  return <ButtonComponent onClick={onClick} {...rest}>{children}</ButtonComponent>;
}
