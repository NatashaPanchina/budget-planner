import React from "react";
import {NavLink} from "react-router-dom";

export default function FamilyAndFriends() {
    return (
            <ul id="FamilyMenu" className="none">
                <li>
                    <NavLink exact to="/family/children"
                    activeClassName="active">Children</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/school" 
                    activeClassName="active">School</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/support"
                    activeClassName="active">Support</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/pets"
                    activeClassName="active">Pets</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/donations"
                    activeClassName="active">Donations and sponsorships</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/repayment"
                    activeClassName="active">Loan repayment to family/friend</NavLink>
                </li>
                <li>
                    <NavLink exact to="/family/items"
                    activeClassName="active">Your additional items</NavLink>
                </li>
            </ul>
    )
}