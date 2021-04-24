import React from "react";
import {NavLink} from "react-router-dom";


export default function FamilyAndFriends() {
    return (
        <nav id="FamilyMenu" className="none">
            <div>
                <NavLink exact to="/family/children"
                activeClassName="active">Children</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/school" 
                activeClassName="active">School</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/support"
                activeClassName="active">Support</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/pets"
                activeClassName="active">Pets</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/donations"
                activeClassName="active">Donations and sponsorships</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/repayment"
                activeClassName="active">Loan repayment to family/friend</NavLink>
            </div>
            <div>
                <NavLink exact to="/family/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}