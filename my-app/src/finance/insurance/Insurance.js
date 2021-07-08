import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Insurance() {
    let names = [
        "Life insurance",
        "Income protection insurance",
        "Critical illness insurance",
        "Payment protection insurance",
        "Credit card insurance",
        "Health insurance",
        "Dental insurance"
    ];
    return <RenderInputs names={names} title="Insurance"/>
}