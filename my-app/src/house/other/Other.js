import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Other() {
    let names = [
        "Ground rent",
        "Service charge"
    ];
    return <RenderInputs names={names} title="Other property charges"/>
}