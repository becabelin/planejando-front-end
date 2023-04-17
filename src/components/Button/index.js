import React from "react";
import {ButtonComponent} from "./styles";

export function Button({children, onClick}) {
    return(
        <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
    );
}
