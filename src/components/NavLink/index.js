import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function NavLink({to, active, children}) {
  return (
    <Container active={active}>
        <Link to={to}>
          {children}
        </Link>
    </Container>
  );
}
