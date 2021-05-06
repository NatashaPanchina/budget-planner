import React from "react";
import {NavLink} from "react-router-dom";

export default function Income() {
    return (
            <ul id="IncomeMenu" className="none">
                <li>
                    <NavLink exact to="/income/pay"
                    activeClassName="active">Pay</NavLink>
                </li>
                <li>
                    <NavLink exact to="/income/benefits" 
                    activeClassName="active">Benefits and Tax Credits</NavLink>
                </li>
                <li>
                    <NavLink exact to="/income/pension"
                    activeClassName="active">Pension</NavLink>
                </li>
                <li>
                    <NavLink exact to="/income/other"
                    activeClassName="active">Other income</NavLink>
                </li>
                <li>
                    <NavLink exact to="/income/items"
                    activeClassName="active">Your additional items</NavLink>
                </li>       
            </ul>
    )
}