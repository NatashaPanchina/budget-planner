import React from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";
import Income from "../income/Income.js";
import HouseholdBills from "../house/HouseholdBills.js";
import Groceries from "../groceries/Groceries.js";
import FinanceAndInsurance from "../finance/FinanceAndInsurance.js";
import FamilyAndFriends from "../family/FamilyAndFriends.js";
import Transport from "../transport/Transport.js";
import Entertainment from "../entertainment/Entertainment.js";

export default function Menu() {

    function handleClick(event){  
        let a = event.target;
        if (a.nextElementSibling.className === "none") {
            a.nextElementSibling.classList.remove('none');
        } else {
            a.nextElementSibling.classList.add('none');
        }
    }

    return (
        <nav id="Menu">
            <div>
                <NavLink exact to="/" 
                activeClassName="selected">Welcome</NavLink>
            </div>
            <div>
                <NavLink exact to="/income"
                activeClassName="selected" onClick={event => handleClick(event)}>
                        Income
                </NavLink>
                <Income /> 
            </div>
            <div>
                <NavLink exact to="/house"
                activeClassName="selected" onClick={event => handleClick(event)}>
                        Household bills
                </NavLink>
                <HouseholdBills />
            </div>
            <div>
                <NavLink exact to="/finance"
                    activeClassName="selected" onClick={event => handleClick(event)}>
                        Finance and Insurance
                </NavLink>
                <FinanceAndInsurance />
            </div>
            <div>
                <NavLink exact to="/groceries"
                    activeClassName="selected" onClick={event => handleClick(event)}>
                        Groceries
                </NavLink>
                <Groceries />
            </div>
            <div>
                <NavLink exact to="/entertainment"
                    activeClassName="selected" onClick={event => handleClick(event)}>
                        Entertainment
                </NavLink>
                <Entertainment />
            </div>
            <div>
                <NavLink exact to="/transport"
                    activeClassName="selected" onClick={event => handleClick(event)}>
                        Transport
                </NavLink>
                <Transport />
            </div>
            <div>
                <NavLink exact to="/family"
                    activeClassName="selected" onClick={event => handleClick(event)}>
                        Family and Friends
                </NavLink>
                <FamilyAndFriends />
            </div>
            <div>
                <NavLink exact to="/other"
                    activeClassName="selected">Others</NavLink>
            </div>
            <div>
                <NavLink exact to="/summary"
                activeClassName="selected">Summary</NavLink>
            </div>
        </nav>
    )
}
