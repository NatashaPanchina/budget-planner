import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Children() {
    let names = [
        "Childcare",
        "Nappies and baby items",
        "Activities and clubs",
        "Toys and treats",
        "Pocket money",
        "Babysitting",
        "Maintenance or child support"
    ];
    return <RenderInputs names={names} title="Children"/>
}