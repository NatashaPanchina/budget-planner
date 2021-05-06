import React from "react";
import { Route } from "react-router-dom";
import Other from "./Other.js";

export default function OtherRoutes() {
    return (
        <div>
            <Route path="/other">
                <Other/>
            </Route>
        </div>
    )
}