import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Pay() {
    let names = [
        "Jobseeker's Allowance",
        "Income Support",
        "Working Tax Credit",
        "Child Tax Credit",
        "Child Benefit",
        "Employment and Support Allowance (or Incapacity Benefit)",
        "Universal Credit",
        "Disability Living Allowance (or Personal Independence Payment)",
        "Attendance Allowance",
        "Carer's Allowance",
        "Housing Benefit",
        "Maternity Allowance"
    ];
    return <RenderInputs names={names} title="Benefits and tax credits"/>
}