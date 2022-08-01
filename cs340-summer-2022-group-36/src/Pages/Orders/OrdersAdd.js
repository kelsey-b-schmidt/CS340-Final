import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Orders() {

    const navigate = useNavigate()

    const [addressID, setAddressID] = useState('')
    const [customerID, setCustomerID] = useState('')
    const [shipDateTime, setShipDateTime] = useState('')


    const handleReset = () => {
        setAddressID('')
        setCustomerID('')
        setShipDateTime('')
    }


    const handleSubmit = () => {
        if (addressID === '' || customerID === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Add"
            // const addressID = orderToEdit.addressID
            // const customerID = orderToEdit.customerID
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
                newOrder()
                    .catch(console.error)
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Add a new Order</strong></legend>
            <label>Address ID:</label>
            <input type="number"
                id="addressID"
                maxLength="100"
                value={addressID}
                onChange={e => setAddressID(e.target.value)}
            />
            <label>Customer ID:</label>
            <input type="number"
                id="customerID"
                maxLength="100"
                value={customerID}
                onChange={e => setCustomerID(e.target.value)}
            />
            <br />
            <label>Ship Date Time:</label>
            <br />
            <input type="text"
                id="shipDateTime"
                value={shipDateTime}
                onChange={(e) => setShipDateTime(e.target.value)}
                disabled />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Orders"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<OrderSearchComponent/>