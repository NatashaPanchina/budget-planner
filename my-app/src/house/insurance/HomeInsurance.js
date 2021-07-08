import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function HomeInsurance() {
    let names = [
        "Buildings insurance",
        "Contents insurance"
    ];
    return <RenderInputs names={names} title="Home insurance"/>
}