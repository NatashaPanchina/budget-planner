import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Investments() {
    let names = [
        "Regular saving",
        "Lump sum saving",
        "Payments into ISAs",
        "Buying shares and other investments",
        "Private pension contributions"
    ];
    return <RenderInputs names={names} title="Saving and investments"/>
}