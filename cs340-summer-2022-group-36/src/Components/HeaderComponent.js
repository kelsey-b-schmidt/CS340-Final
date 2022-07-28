import React from "react";
import {Link} from "react-router-dom";


export default function HeaderComponent () {

    return (
        <div>
            <h1>Andy and Kelsey's Project</h1>
            <ul class="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Customers">Customers</Link></li>
                <li><Link to="/Products">Products</Link></li>
            </ul>
        </div>
    )
}

//<Link to="/Customers">Customers</Link>