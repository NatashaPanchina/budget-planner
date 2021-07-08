import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function EatOut() {
    let names = [
        "Lunches - bought",
        "Take-away and snacks",
        "Restaurants",
        "Going out for drinks",
        "Others"
    ];
    return <RenderInputs names={names} title="Eat-out"/>
}