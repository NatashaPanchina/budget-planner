import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Banking() {
    let names = [
        "Overdraft charges and interest",
        "Bank account fees",
        "Penalties"
    ];
    return <RenderInputs names={names} title="Banking"/>
}