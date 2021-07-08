import React from "react";
import { Route } from "react-router-dom";
import Children from "./children/Children.js";
import School from "./school/School.js";
import Support from "./support/Support.js";
import Pets from "./pets/Pets.js";
import Donations from "./donations/Donations.js";
import Repayment from "./repayment/Repayment.js";
import AddItems from "./items/AddItems.js";

export default function FamilyAndFriendsRoutes() {
    return (
        <div>
            <Route path="/family/children">
                <Children />
            </Route>
            <Route path="/family/school">
                <School />
            </Route>
            <Route path="/family/support">
                <Support />
            </Route>
            <Route path="/family/pets">
                <Pets />
            </Route>
            <Route path="/family/donations">
                <Donations />
            </Route>
            <Route path="/family/repayment">
                <Repayment />
            </Route>
            <Route path="/family/items">
                <AddItems />
            </Route>
        </div>
    )
}
