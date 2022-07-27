import React from "react";
import {Link} from "react-router-dom";


export default function HeaderComponent () {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

//<Link to="/Customers">Customers</Link>