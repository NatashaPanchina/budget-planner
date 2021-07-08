import React from "react";
import {NavLink} from "react-router-dom";

export default function HouseholdBills() {
    return (  
        <ul id="HouseholdBillsMenu" className="none">
            <li>
                <NavLink exact to="/house/mortgage"
                activeClassName="active">Mortgage and rent</NavLink>
            </li>
            <li>
                <NavLink exact to="/house/other" 
                activeClassName="active">Other property charges</NavLink>
            </li>
            <li>
                <NavLink exact to="/house/insurance"
                activeClassName="active">Home insurance</NavLink>
            </li>
            <li>
                <NavLink exact to="/house/utilities"
                activeClassName="active">Utilities</NavLink>
            </li>
            <li>
                <NavLink exact to="/house/items"
                activeClassName="active">Your additional items</NavLink>
            </li>
        </ul>
    )
}
