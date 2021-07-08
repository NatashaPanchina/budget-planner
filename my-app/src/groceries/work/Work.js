import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Work() {
    let names = [
        "Takeaway coffees, etc",
        "Union/professional fees"
    ];
    return <RenderInputs names={names} title="Work"/>
}