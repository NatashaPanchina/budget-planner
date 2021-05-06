import React from "react";
import {NavLink} from "react-router-dom";

export default function Entertainment() {
    return (
            <ul id="EntertainmentMenu" className="none">
                <li>
                    <NavLink exact to="/entertainment/leisure"
                    activeClassName="active">Entertainment</NavLink>
                </li>
                <li>
                    <NavLink exact to="/entertainment/one-offs" 
                    activeClassName="active">One-offs</NavLink>
                </li>
                <li>
                    <NavLink exact to="/entertainment/holidays" 
                    activeClassName="active">Holidays</NavLink>
                </li>
                <li>
                    <NavLink exact to="/entertainment/eat-out" 
                    activeClassName="active">Eat-out</NavLink>
                </li>
                <li>
                    <NavLink exact to="/entertainment/items"
                    activeClassName="active">Your additional items</NavLink>
                </li>
            </ul>
    )
}