import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressIDDynamicSelectUpdateComponent from "../../Components/Addresses/AddressIDDynamicSelectUpdateComponent";
import {useEffect} from "react";

export default function OrdersUpdate({orderToEdit, addresses, setAddresses}) {

    const navigate = useNavigate()

    const [addressIDUpdate, setAddressIDUpdate] = useState(orderToEdit.addressID)
    const orderID = orderToEdit.orderID
    const customerID = orderToEdit.customerID
    const shipDateTime = orderToEdit.shipDateTime

    useEffect(() => {   // load addresses for selection
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
            .catch(error => {
                alert('Failed to update Order, please check the input and try again!')
            })

    }, [customerID])


    const handleReset = () => {
        setAddressIDUpdate(orderToEdit.addressID)
    }

    const handleSubmit = () => {
        if (addressIDUpdate === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else {
            const action = "Update"
            const newOrder = async () => {
                const newOrderValues = {
                    action,
                    addressIDUpdate,
                    shipDateTime,
                    orderID
                }
                const response = await fetch('/api/Orders', {
                    method: 'POST',
                    body: JSON.stringify(newOrderValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully updated the Order!\nYou will now be redirected to the Orders Page.")
                    navigate("/Orders")
                }
            }
            const answer = window.confirm("This will update this Order with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newOrder()  // the new data has already loaded into the component
                    .catch(error => {
                        alert('Failed to update Order, please check the input and try again!')
                    })
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Update Order Address</strong></legend>
            <label>Order ID:</label>
            <br/>
            <input type="text"
                   id="orderID"
                   value={orderToEdit.orderID} disabled/>
            <br/>
            <label>Customer ID:</label>
            <br/>
            <input type="text"
                   id="customerID"
                   value={orderToEdit.customerID} disabled/>
            <br/>
            <label>Address ID:</label>
                <br/>
                <AddressIDDynamicSelectUpdateComponent
                    addressIDUpdate={addressIDUpdate}
                    addresses={addresses}
                    setAddressIDUpdate={setAddressIDUpdate}
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