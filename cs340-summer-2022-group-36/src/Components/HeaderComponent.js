import React from "react";
import {Link} from "react-router-dom";


export default function HeaderComponent () {

    return (
        <div>
            <h1>Andy and Kelsey's Project</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

//<Link to="/Customers">Customers</Link>