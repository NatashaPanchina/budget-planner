import React from "react";
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <ul id="HomeMenu" >
            <li>
                <NavLink exact to="/" activeClassName="active">
                About
                </NavLink>
            </li>
        </ul>
    )
}