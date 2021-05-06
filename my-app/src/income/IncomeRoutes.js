import React from "react";
import { Route } from "react-router-dom";
import Pay from "./pay/Pay.js";
import Benefits from "./benefits/Benefits.js";
import Pension from "./pension/Pension.js";
import Other from "./other/OtherIncome.js";
import AddItems from "./items/AddItems.js";

export default function IncomeRoutes() {
    return (
        <div>
                <Route path="/income/pay">
                    <Pay />
                </Route>
                <Route path="/income/benefits">
                    <Benefits />
                </Route>
                <Route path="/income/pension">
                    <Pension />
                </Route>
                <Route path="/income/other">
                    <Other />
                </Route>
                <Route path="/income/items">
                    <AddItems />
                </Route>
        </div>   
    )
}