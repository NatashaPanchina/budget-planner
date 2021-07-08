import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Clothes() {
    let names = [
        "Children's clothes",
        "School uniform",
        "Shoes",
        "Work clothes",
        "New clothes for you",
        "Laundry and dry cleaning"
    ];
    return <RenderInputs names={names} title="Clothes ans shoes"/>
}