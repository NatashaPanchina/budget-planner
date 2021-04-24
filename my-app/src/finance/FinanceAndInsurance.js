import React from "react";
import {NavLink} from "react-router-dom";


export default function FinanceAndInsurance() {
    return (
        <nav id="FinanceMenu" className="none">
            <div>
                <NavLink exact to="/finance/insurance"
                activeClassName="active">Insurance</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/banking" 
                activeClassName="active">Banking</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/credit"
                activeClassName="active">Loans and credit</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/investments"
                activeClassName="active">Saving and investments</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/plans"
                activeClassName="active">Future plans</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/financial"
                activeClassName="active">Financial and legal advice</NavLink>
            </div>
            <div>
                <NavLink exact to="/finance/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}