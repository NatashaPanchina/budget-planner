import React from "react";
import {NavLink} from "react-router-dom";

export default function FinanceAndInsurance() {
    return (
        <ul id="FinanceMenu" className="none">
            <li>
                <NavLink exact to="/finance/insurance"
                activeClassName="active">Insurance</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/banking" 
                 activeClassName="active">Banking</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/credit"
                activeClassName="active">Loans and credit</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/investments"
                activeClassName="active">Saving and investments</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/plans"
                activeClassName="active">Future plans</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/financial"
                activeClassName="active">Financial and legal advice</NavLink>
            </li>
            <li>
                <NavLink exact to="/finance/items"
                activeClassName="active">Your additional items</NavLink>
            </li>     
        </ul>
    )
}