import React from "react";
import { Route } from "react-router-dom";
import Insurance from "./insurance/Insurance.js";
import Banking from "./banking/Banking.js";
import Credit from "./credit/Credit.js";
import Investments from "./investments/Investments.js";
import Plans from "./plans/Plans.js";
import LegalAdvice from "./financial/LegalAdvice.js";
import AddItems from "./items/AddItems.js";

export default function FinanceRoutes() {
    return (
        <div>
            <Route path="/finance/insurance">
                <Insurance />
            </Route>
            <Route path="/finance/banking">
                <Banking />
            </Route>
            <Route path="/finance/credit">
                <Credit />
            </Route>
            <Route path="/finance/investments">
                <Investments />
            </Route>
            <Route path="/finance/plans">
                <Plans />
            </Route>
            <Route path="/finance/financial">
                <LegalAdvice />
            </Route>
            <Route path="/finance/items">
                <AddItems />
            </Route>
        </div>
    )
}