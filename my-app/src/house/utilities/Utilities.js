import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Utilities() {
    let names = [
        "Council Tax or Rates",
        "Gas",
        "Electricity",
        "Other household fuel",
        "Water",
        "Home phone",
        "Mobile phones",
        "Internet/broadband",
        "Anti-virus and other IT costs",
        "TV licence",
        "Satellite or digital TV ",
        "Cleaner, window cleaner, etc",
        "Home maintenance",
        "Garden maintenance",
        "Appliance rental",
        "Boiler cover"
    ];
    return <RenderInputs names={names} title="Utilities"/>
}