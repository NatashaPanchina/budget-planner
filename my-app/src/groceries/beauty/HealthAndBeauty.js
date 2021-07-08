import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function HealthAndBeauty() {
    let names = [
        "Cosmetics and toiletries",
        "Hair and beauty",
        "Medicines and pharmacy",
        "Glasses and eye care",
        "Dental",
        "Doctors and medical"
    ];
    return <RenderInputs names={names} title="Health and beauty"/>
}