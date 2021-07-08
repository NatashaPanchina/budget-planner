import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Plans() {
    let names = [
        "Long term care plan",
        "Funeral plan"
    ];
    return <RenderInputs names={names} title="Future plans"/>
}