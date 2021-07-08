import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Credit() {
    let names = [
        "Loan repayments",
        "Student loan repayments",
        "Credit card repayments",
        "Hire purchase and catalogue repayments"
    ];
    return <RenderInputs names={names} title="Loans and credit"/>
}