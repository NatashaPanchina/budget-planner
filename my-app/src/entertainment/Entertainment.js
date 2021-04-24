import React from "react";
import {NavLink} from "react-router-dom";


export default function Entertainment() {
    return (
        <nav id="EntertainmentMenu" className="none">
            <div>
                <NavLink exact to="/entertainment/leisure"
                activeClassName="active">Entertainment</NavLink>
            </div>
            <div>
                <NavLink exact to="/entertainment/one-offs" 
                activeClassName="active">One-offs</NavLink>
            </div>
            <div>
                <NavLink exact to="/entertainment/holidays" 
                activeClassName="active">Holidays</NavLink>
            </div>
            <div>
                <NavLink exact to="/entertainment/eat-out" 
                activeClassName="active">Eat-out</NavLink>
            </div>
            <div>
                <NavLink exact to="/entertainment/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}