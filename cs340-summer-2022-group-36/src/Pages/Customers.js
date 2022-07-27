import React from 'react'
import {useState, useEffect } from 'react'
import CustomerListComponent from "../Components/CustomerListComponent";
import SearchCustomersComponent from "../Components/SearchCustomersComponent";

export default function Customers() {

    const [customers, setCustomers] = useState([])
    const [lastSearch, setLastSearch] = useState("")

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
        <div>
            <h2>Customers</h2>
            <h3>Last search:</h3>
            <h3>{lastSearch}</h3>
            <div class="table">
                <SearchCustomersComponent
                    setLastSearch={setLastSearch}/>
                <fieldset>
                    <legend><strong>Browse Customers</strong></legend>
                    <CustomerListComponent
                        customers={customers}
                    />
                </fieldset>
            </div>
            <br/>
            <input type="button" value="Add New Customer"/>
            <br/>
            <br/>
        </div>
    )
}