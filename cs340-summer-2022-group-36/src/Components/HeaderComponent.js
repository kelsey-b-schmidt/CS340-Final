import React from "react";
import NavigationComponent from "./NavigationComponent";


export default function HeaderComponent () {

    return (
        <header>
            <h1>Kelsey and Andy's Project</h1>
            <p><strong><NavigationComponent link={"Home"}></NavigationComponent></strong></p>
            <p><strong><NavigationComponent link={"Customers"}></NavigationComponent></strong></p>
        </header>
    )
}