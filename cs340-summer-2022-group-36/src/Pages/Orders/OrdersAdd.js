import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressIDDynamicSelectAddComponent from "../../Components/Addresses/AddressIDDynamicSelectAddComponent";
import CustomerIDDynamicSelectAddComponent from "../../Components/Customers/CustomerIDDynamicSelectAddComponent";
import {useEffect} from "react";

export default function Orders({addresses, setAddresses, customers, setCustomers}) {

    const navigate = useNavigate()

    const [addressID, setAddressID] = useState('')
    const [customerID, setCustomerID] = useState('')
    const [shipDateTime] = useState(null)

    useEffect(() => {   // load customers for selection
        const getCustomers = async() => {
            const response = await fetch("/api/Customers")
            const responseJson = await response.json()
            setCustomers(responseJson)
        }
        getCustomers()
            .catch(console.error)
    }, [])

    useEffect(() => {   // load addresses for selection
        if (customerID !== "") {
            const action = "Search"
            const newAddressSearch = async () => {
                const searchAddressValues = {
                    action,
                    customerID
                }
                const response = await fetch('/api/Addresses', {
                    method: 'POST',
                    body: JSON.stringify(searchAddressValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                setAddresses(responseJson)
            }
            newAddressSearch()  // the new data has already loaded into the component
                .catch(console.error)
        }
        else {
            setAddresses([])
        }

    }, [customerID])




    const handleReset = () => {
        setCustomerID('')
        setAddressID('')
    }

    const handleSubmit = () => {
        if (addressID === '' || customerID === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else {
            const action = "Add"
            const newOrder = async () => {
                const newOrderValues = {
                    action,
                    addressID,
                    customerID,
                    shipDateTime
                }
                const response = await fetch('/api/Orders', {
                    method: 'POST',
                    body: JSON.stringify(newOrderValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully added the Order!\nYou will now be redirected to the Orders Page.")
                    navigate("/Orders")
                } else {
                    alert("Failed to add Order, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will create a new Order with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newOrder()  // the new data has already loaded into the component
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Add a new Order</strong></legend>
            <label>Customer ID:</label>
            <br/>
            <CustomerIDDynamicSelectAddComponent
                customers={customers}
                setCustomerID={setCustomerID}
            />
            <br/>
            <label>Address ID:</label>
                <br/>
                <AddressIDDynamicSelectAddComponent
                    addresses={addresses}
                    setAddressID={setAddressID}
                />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Orders"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<OrderSearchComponent/>