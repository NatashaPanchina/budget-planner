import React from "react";
import { Route } from "react-router-dom";
import Summary from "./Summary.js";

export default function SummaryRoutes() {
    return (
        <div>
            <Route path="/summary">
                <Summary/>
            </Route>
        </div>
    )
}