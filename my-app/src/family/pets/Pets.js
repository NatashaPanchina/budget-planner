import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Pets() {
    let names = [
        "Food",
        "Vet bills",
        "Pet insurance"
    ];
    return <RenderInputs names={names} title="Pets"/>
}