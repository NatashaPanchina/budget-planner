import React from "react";
import {NavLink} from "react-router-dom";

export default function Income() {
    return (
        <nav id="IncomeMenu" className="none">
            <div>
                <NavLink exact to="/income/pay"
                activeClassName="active">Pay</NavLink>
            </div>
            <div>
                <NavLink exact to="/income/benefits" 
                activeClassName="active">Benefits and Tax Credits</NavLink>
            </div>
            <div>
                <NavLink exact to="/income/pension"
                activeClassName="active">Pension</NavLink>
            </div>
            <div>
                <NavLink exact to="/income/other"
                activeClassName="active">Other income</NavLink>
            </div>
            <div>
                <NavLink exact to="/income/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}