import React from 'react'
import { Link } from "react-router-dom";
import CustomerBrowseComponent from "../../Components/Customers/CustomerBrowseComponent";
//import CustomerSearchComponent from "../Components/CustomerSearchComponent";

export default function Customers({ setCustomerToEdit }) {

    return (
        <div>
            <h2>Customers</h2>
            <Link to='/CustomersAdd'><button>Add a new Customer</button></Link>
            <br />
            <br />
            <CustomerBrowseComponent
                setCustomerToEdit={setCustomerToEdit} />
        </div>
    )
}

//<CustomerSearchComponent/>
