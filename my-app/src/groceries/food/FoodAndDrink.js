import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function FoodAndDrink() {
    let names = [
        "Grocery shopping",
        "Drinks",
        "Alcohol",
        "Cigarettes"
    ];
    return <RenderInputs names={names} title="Food and drink"/>
}