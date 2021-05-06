import React from "react";
import { Route } from "react-router-dom";
import Leisure from "./leisure/Leisure.js";
import OneOffs from "./one-offs/OneOffs.js";
import Holidays from "./holidays/Holidays.js";
import EatOut from "./eat-out/EatOut.js";
import AddItems from "./items/AddItems.js";


export default function EntertainmentRoutes() {
    return (
        <div>
            <Route path="/entertainment/leisure">
                <Leisure />
            </Route>
            <Route path="/entertainment/one-offs">
                <OneOffs />
            </Route>
            <Route path="/entertainment/holidays">
                <Holidays />
            </Route>
            <Route path="/entertainment/eat-out">
                <EatOut />
            </Route>
            <Route path="/entertainment/items">
                <AddItems />
            </Route>
        </div>
    )
}