import React from "react";
import {NavLink} from "react-router-dom";


export default function HouseholdBills() {
    return (
        <nav id="HouseholdBillsMenu" className="none">
            <div>
                <NavLink exact to="/house/mortgage"
                activeClassName="active">Mortgage and rent</NavLink>
            </div>
            <div>
                <NavLink exact to="/house/other" 
                activeClassName="active">Other property charges</NavLink>
            </div>
            <div>
                <NavLink exact to="/house/insurance"
                activeClassName="active">Home insurance</NavLink>
            </div>
            <div>
                <NavLink exact to="/house/utilities"
                activeClassName="active">Utilities</NavLink>
            </div>
            <div>
                <NavLink exact to="/house/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}