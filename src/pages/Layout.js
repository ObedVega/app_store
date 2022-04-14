import React from "react";

import { BarMenu } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export const Layout = () => {

    return (
        <>
            <BarMenu/>  
            <Outlet />
            <br/>
            <Footer/> 
        </>
    )
  };