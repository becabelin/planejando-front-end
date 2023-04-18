import React from "react";
import { Container, Title, SubTitle } from "../Header/styles";
import groups from "../../assets/groups.png";

export function Header() {
  return (
    <Container>
      <SubTitle>Time FIAP</SubTitle>
      <Title>Adicionar</Title>
      <img src={groups} alt="groups" />
    </Container>
  );
}
