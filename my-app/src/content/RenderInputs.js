import React from "react";
import "./RenderInputs.css";

function RenderInput(props) {
    return(
        <div className="income_inputs">
            <div className="income_title"><label>{props.name} </label></div>
            <div className="income_value">
                <input type="number" id="number" step="0.01" placeholder="0.00" 
                maxLength="3" ></input>
                <input type="date" name="date"></input>
            </div>
        </div>
    )
}

export default function RenderInputs(props) {
    const names = props.names;
    return (
        <fieldset>
            <legend>{props.title}</legend>
            {names.map((name) => {
                return <RenderInput key={name.toString()} name={name} />
            })}
        </fieldset>
    )    
}