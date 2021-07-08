import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function OneOffs() {
    let names = [
        "Birthdays",
        "Christmas",
        "Other festivals and celebrations",
        "Weddings"
    ];
    return <RenderInputs names={names} title="One-offs"/>
}