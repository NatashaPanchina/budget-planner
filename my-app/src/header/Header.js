import React from "react";
import "./Header.css";

export default function Header() {

    return (
        <div id="header">
            <div id="logo">
                <a href="/">
                    <span id="title">Budget planner</span>
                </a>
            </div>
            <div id="login">
                <div id="signin">
                    <a href="">
                        <span>Sign in</span>
                    </a>
                </div>
                <div id="signup">
                    <a href="">
                        <span>Sign up</span>
                    </a>
                </div>
            </div>
        </div>
    );
}