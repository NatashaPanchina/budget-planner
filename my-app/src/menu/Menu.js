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

    return (
        <div><ul id="Menu">
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/$/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                    Welcome
                </NavLink>
                <Home/>
            </li>
            <li>
                <NavLink exact to="#!"
                    isActive={() => /^\/income/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Income
                </NavLink>
                <Income /> 
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/house/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Household bills
                </NavLink>
                <HouseholdBills />
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/finance/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Finance and Insurance
                </NavLink>
                <FinanceAndInsurance />
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/groceries/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Groceries
                </NavLink>
                <Groceries />
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/entertainment/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Entertainment
                </NavLink>
                <Entertainment />
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/transport/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Transport
                </NavLink>
                <Transport />
            </li>
            <li>
                <NavLink exact to="#!"  
                    isActive={() => /^\/family/.test(window.location.pathname) }
                    onClick={event => handleClick(event)}
                    activeClassName="selected">
                        Family and Friends
                </NavLink>
                <FamilyAndFriends />
            </li>
            <li>
                <NavLink exact to="/other" activeClassName="selected" >
                    Others
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/summary" activeClassName="selected" >
                    Summary
                </NavLink>
            </li>
        </ul></div>
    )
}

