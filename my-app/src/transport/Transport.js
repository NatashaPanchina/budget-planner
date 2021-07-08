import React from "react";
import {NavLink} from "react-router-dom";

export default function Transport() {
    return (
            <ul id="TransportMenu" className="none">
                <li>
                    <NavLink exact to="/transport/car"
                    activeClassName="active">Car costs</NavLink>
                </li>
                <li>
                    <NavLink exact to="/transport/public" 
                    activeClassName="active">Public transport</NavLink>
                </li>
                <li>
                    <NavLink exact to="/transport/items"
                    activeClassName="active">Your additional items</NavLink>
                </li>
            </ul>
    )
}