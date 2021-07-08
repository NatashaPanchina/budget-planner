import React from "react";
import { Route } from "react-router-dom";
import FoodAndDrink from "./food/FoodAndDrink.js";
import Work from "./work/Work.js";
import Clothes from "./clothes/Clothes.js";
import HealthAndBeauty from "./beauty/HealthAndBeauty.js";
import AddItems from "./items/AddItems.js";

export default function GroceriesRoutes() {
    return (
        <div>
            <Route path="/groceries/food">
                <FoodAndDrink />
            </Route>
            <Route path="/groceries/work">
                <Work />
            </Route>
            <Route path="/groceries/clothes">
                <Clothes />
            </Route>
            <Route path="/groceries/beauty">
                <HealthAndBeauty />
            </Route>
            <Route path="/groceries/items">
                <AddItems />
            </Route>
        </div>
    )
}