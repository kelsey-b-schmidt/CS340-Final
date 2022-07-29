import React from 'react'
//import {Link} from "react-router-dom";
import CustomerBrowseComponent from "../../Components/Customers/CustomerBrowseComponent";
//import CustomerSearchComponent from "../Components/CustomerSearchComponent";

export default function Customers() {

    return (
        <div>
            <h2>Customers</h2>
            <button>Add a new Customer</button>
            <br/>
            <br/>
            <CustomerBrowseComponent/>
        </div>
    )
}

//<CustomerSearchComponent/>
// <Link to="/CustomersAdd"><button>Add a new Customer</button></Link> (button with link, when finished)