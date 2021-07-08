import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function MortgageAndRent() {
    let names = [
        "Mortgage payment",
        "Rent",
        "Mortgage endowment",
        "Mortgage life insurance",
        "Mortgage payment protection insurance"
    ];
    return <RenderInputs names={names} title="Mortgage and rent"/>
}