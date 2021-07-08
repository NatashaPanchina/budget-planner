import React from "react";
import RenderInputs from "../../content/RenderInputs.js";

export default function Leisure() {
    let names = [
        "Cinema and theatre trips",
        "Days out",
        "Books, music, films, games, etc",
        "Hobbies",
        "Sport and gym",
        "Lottery and gambling",
        "Newspapers and magazines",
        "Bars and clubs"
    ];
    return <RenderInputs names={names} title="Entertainment"/>
}