import React from "react";
import {Header} from "../../components/Header";
import { SiderBar } from "../../components/SideBar";

export function Home() {
    return(
        <>
        <Header />
        <SiderBar active="home" />
        </>
    );
}
