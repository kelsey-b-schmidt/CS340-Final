import React from 'react'
import CustomerTableComponent from "./CustomerTableComponent";
import {useEffect, useState} from "react";

export default function CustomerBrowseComponent() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api/Customers")
            const responseJson = await response.json()
            setCustomers(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <fieldset>
            <legend><strong>Browse Customers</strong></legend>
            <CustomerTableComponent
                customers={customers}
            />
        </fieldset>
    )
}