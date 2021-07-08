import React from "react";
import RenderInputs from "../../content/RenderInputs.js";


export default function Pay() {
    let names = [
        "Pay(after tax)",
        "Income from self-employment",
        "Statutory Sick Pay",
        "Statutory Maternity Pay"
    ];
    return <RenderInputs names={names} title="Pay"/>
}