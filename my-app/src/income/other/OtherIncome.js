import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Other() {
    let names = [
        "Income from savings and investments",
        "Board or rent",
        "Child maintenance",
        "Student loans and grants",
        "Other financial support",
        "Gifts from family and friends"
    ];
    return <RenderInputs names={names} title="Other income"/>
}