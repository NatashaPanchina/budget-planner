import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Pension() {
    let names = [
        "State Pension",
        "Workplace Pension",
        "Private pension or annuity",
        "Pension Credit"
    ];
    return <RenderInputs names={names} title="Pension"/>
}