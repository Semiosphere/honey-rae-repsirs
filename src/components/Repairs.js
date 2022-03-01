
//This module will render a navigation bar and the component that
//corresponds with the url

import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./repairs.css"


export const Repairs = () => {
    return (
        <>
            <NavBar />
            <h1>Honey Rae's Repair Shop</h1>
            
            <ApplicationViews />
        </>
    )
}