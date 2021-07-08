import React from "react";
import { Route } from "react-router-dom";
import MortgageAndRent from "./mortgage/MortgageAndRent.js";
import Other from "./other/Other.js";
import HomeInsurance from "./insurance/HomeInsurance.js";
import Utilities from "./utilities/Utilities.js";
import AddItems from "./items/AddItems.js";

export default function HouseholdBillsRoutes() {
    return (
        <div>
            <Route path="/house/mortgage">
                <MortgageAndRent />
            </Route>
            <Route path="/house/other">
                <Other />
            </Route>
            <Route path="/house/insurance">
                <HomeInsurance />
            </Route>
            <Route path="/house/utilities">
                <Utilities />
            </Route>
            <Route path="/house/items">
                <AddItems />
            </Route>
        </div>
    )
}