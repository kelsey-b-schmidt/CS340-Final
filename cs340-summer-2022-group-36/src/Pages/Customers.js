import React from 'react'
import {useState, useEffect } from 'react'
import CustomerListComponent from "../Components/CustomerListComponent";

export default function Customers() {

    const [customers, setCustomers] = useState([])

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
            />
        </div>
    )
}