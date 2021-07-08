import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function School() {
    let names = [
        "School fees",
        "School trips",
        "School dinners",
        "After-school clubs"
    ];
    return <RenderInputs names={names} title="School"/>
}