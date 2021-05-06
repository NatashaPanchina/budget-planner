import React from "react";
import {NavLink} from "react-router-dom";

export default function Groceries() {
    return (
            <ul id="GroceriesMenu" className="none">
                <li>
                    <NavLink exact to="/groceries/food"
                    activeClassName="active">Food and drink</NavLink>
                </li>
                <li>
                    <NavLink exact to="/groceries/work" 
                    activeClassName="active">Work</NavLink>
                </li>
                <li>
                    <NavLink exact to="/groceries/clothes"
                    activeClassName="active">Clothes and shoes</NavLink>
                </li>
                <li>
                    <NavLink exact to="/groceries/beauty"
                    activeClassName="active">Health and beauty</NavLink>
                </li>
                <li>
                    <NavLink exact to="/groceries/items"
                    activeClassName="active">Your additional items</NavLink>
                </li>  
            </ul>
    )
}