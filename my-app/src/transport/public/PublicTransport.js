import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function PublicTransport() {
    let names = [
        "Bus, tube and tram fares",
        "Taxis",
        "Air travel",
        "Trains"
    ];
    return <RenderInputs names={names} title="Public transport"/>
}