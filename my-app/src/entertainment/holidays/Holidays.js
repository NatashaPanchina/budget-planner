import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Holidays() {
    let names = [
        "Holidays",
        "Travel insurance",
        "Spending money"
    ];
    return <RenderInputs names={names} title="Holidays"/>
}