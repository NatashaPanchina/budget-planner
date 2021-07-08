import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function CarCosts() {
    let names = [
        "Petrol/diesel",
        "Car insurance",
        "Breakdown cover",
        "Car tax",
        "Car finance or loan repayment",
        "Loan insurance",
        "MOT",
        "Maintenance and repairs",
        "Parking and tolls"
    ];
    return <RenderInputs names={names} title="Car costs"/>
}