import React from "react";
import { Container } from "./styles";
import { BsArrowUpRight, BsCalendarEvent } from "react-icons/bs";
import {BiMenu} from "react-icons/bi";
import { NavLink } from "../NavLink";
import { Colors } from "../../shared/DesignTokens";

export function SiderBar({ active }) {
  return (
    <Container>
      <NavLink to="" active={active === "menu"}>
        <BiMenu
          size={30}
          color={active === "menu" ? Colors.BLUE : Colors.BLACK}
        />
      </NavLink>

      <NavLink to="" active={active === "calendar"}>
        <BsCalendarEvent
          size={30}
          color={active === "calendar" ? Colors.BLUE : Colors.BLACK}
        />
      </NavLink>

      <NavLink to="/home" active={active === "home"}>
        <BsArrowUpRight
          size={30}
          color={active === "home" ? Colors.BLUE : Colors.BLACK}
        />
      </NavLink>
    </Container>
  );
}
