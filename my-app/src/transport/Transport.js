import React from "react";
import {NavLink} from "react-router-dom";


export default function Transport() {
    return (
        <nav id="TransportMenu" className="none">
            <div>
                <NavLink exact to="/transport/car"
                activeClassName="active">Car costs</NavLink>
            </div>
            <div>
                <NavLink exact to="/transport/public" 
                activeClassName="active">Public transport</NavLink>
            </div>
            <div>
                <NavLink exact to="/transport/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}