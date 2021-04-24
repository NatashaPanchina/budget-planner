import React from "react";
import {NavLink} from "react-router-dom";


export default function Groceries() {
    return (
        <nav id="GroceriesMenu" className="none">
            <div>
                <NavLink exact to="/groceries/food"
                activeClassName="active">Food and drink</NavLink>
            </div>
            <div>
                <NavLink exact to="/groceries/work" 
                activeClassName="active">Work</NavLink>
            </div>
            <div>
                <NavLink exact to="/groceries/clothes"
                activeClassName="active">Clothes and shoes</NavLink>
            </div>
            <div>
                <NavLink exact to="/groceries/beauty"
                activeClassName="active">Health and beauty</NavLink>
            </div>
            <div>
                <NavLink exact to="/groceries/items"
                activeClassName="active">Your additional items</NavLink>
            </div>
       
        </nav>
    )
}