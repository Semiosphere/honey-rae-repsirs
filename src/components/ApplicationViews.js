
//The purpose of this module is to listen for when the url is changed
//to evaluate these routes. When a match is found, it will render
//one of these components

import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketList } from "./serviceTickets/TicketList";
import { TicketForm } from "./serviceTickets/TicketForm";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
            <EmployeeList />  
            </Route>

            <Route exact path="/tickets">
            <TicketList />  
            </Route>

            <Route path="/tickets/create">
            <TicketForm />  
            </Route>
        </>
        //use 'exact' to specify a route
    )
}