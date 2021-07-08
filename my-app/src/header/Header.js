import React from "react";
import "./Header.css";
import logo from "./logo.png";
export default function Header() {

    return (
        <div id="header">
            <div>
                <div id="logo">
                    <img src={logo} width="40px" />
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
        </div>
    );
}