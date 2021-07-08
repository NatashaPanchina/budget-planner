import React from "react";
import { Route } from "react-router-dom";
import CarCosts from "./car/CarCosts.js";
import PublicTransport from "./public/PublicTransport.js";
import AddItems from "./items/AddItems.js";

export default function TransportRoutes() {
    return (
        <div>
        <Route path="/transport/car">
            <CarCosts />
        </Route>
        <Route path="/transport/public">
            <PublicTransport />
        </Route>
        <Route path="/transport/items">
            <AddItems />
        </Route>
        </div>
    )
}