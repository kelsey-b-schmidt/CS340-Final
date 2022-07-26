import React from 'react'
//import CustomerListComponent from '../Components/CustomerListComponent'
import { useState, useEffect } from 'react'
import CustomerListComponent from "../Components/CustomerListComponent";

export default function Customers(
    {customers, setCustomers}) {
    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api")
            const responseJson = await response.json()
            setCustomers(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>List of Customers</h2>
            <CustomerListComponent
                customers={customers}
                setCustomers={setCustomers}
            />
        </div>
    )
}

//<CustomerListComponent customers={customers}/>
//<p>{customers}</p>