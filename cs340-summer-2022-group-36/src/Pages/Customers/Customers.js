import React from 'react'
import { Link } from "react-router-dom";
import CustomerBrowseComponent from "../../Components/Customers/CustomerBrowseComponent";
import {useEffect} from "react";
//import CustomerSearchComponent from "../Components/CustomerSearchComponent";

export default function Customers({ customers, setCustomers, setCustomerToEdit }) {

    useEffect(() => {
        const getCustomers = async() => {
            const response = await fetch("/api/Customers")
            const responseJson = await response.json()
            setCustomers(responseJson)
        }
        getCustomers()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Customers</h2>
            <Link to='/CustomersAdd'><button>Add a new Customer</button></Link>
            <br />
            <br />
            <CustomerBrowseComponent
                customers={customers}
                setCustomerToEdit={setCustomerToEdit}
            />
        </div>
    )
}

//<CustomerSearchComponent/>