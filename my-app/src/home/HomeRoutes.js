import React from "react";
import { Route } from "react-router-dom";
import About from "./about/About.js";

export default function HomeRoutes() {
    return (
        <div>
            <Route exact path="/">
                <About />
            </Route>     
        </div>   
    )
}