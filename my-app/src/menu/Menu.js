import React from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";
import Home from "../home/Home.js";
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

    function renderNavLink(url, name) {
        return (
            <NavLink exact to="#!"
                isActive={() => url.test(window.location.pathname) }
                onClick={event => handleClick(event)}
                className="topic"
                activeClassName="selected">
                    {name}
            </NavLink>
        )
    }

    return (
        <div id="menu_wrapper">
            <ul id="Menu">
            <li>
                { renderNavLink(/^\/$/, "Welcome") }
                <Home/>
            </li>
            <li>
                { renderNavLink(/^\/income/, "Income") }
                <Income /> 
            </li>
            <li>
                { renderNavLink(/^\/house/, "Household bills") }
                <HouseholdBills />
            </li>
            <li>
                { renderNavLink(/^\/finance/, "Finance and Insurance") }
                <FinanceAndInsurance />
            </li>
            <li>
                { renderNavLink(/^\/groceries/, "Groceries") }
                <Groceries />
            </li>
            <li>
                { renderNavLink(/^\/entertainment/, "Entertainment") }
                <Entertainment />
            </li>
            <li>
                { renderNavLink(/^\/transport/, "Transport") }
                <Transport />
            </li>
            <li>
                { renderNavLink(/^\/family/, "Family and Friends") }
                <FamilyAndFriends />
            </li>
            <li>
                <NavLink exact to="/other" className="topic" activeClassName="selected" >
                    Others
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/summary" className="topic" activeClassName="selected" >
                    Summary
                </NavLink>
            </li>
        </ul>
        </div>
    )
}

