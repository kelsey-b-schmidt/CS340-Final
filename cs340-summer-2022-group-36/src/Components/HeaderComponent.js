import React from "react";
import {Link} from "react-router-dom";


export default function HeaderComponent () {

    return (
        <div class="inline-block">
            <h1>Andy and Kelsey's Project</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Customers">Customers</Link>
        </div>
    )
}

//<Link to="/Customers">Customers</Link>