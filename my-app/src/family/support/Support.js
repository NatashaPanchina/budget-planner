import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Support() {
    let names = [
        "Support for student children",
        "Support for other relatives"
    ];
    return <RenderInputs names={names} title="Support"/>
}