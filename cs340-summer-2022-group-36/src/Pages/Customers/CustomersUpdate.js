import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Customers({ customerToEdit }) {

    const navigate = useNavigate()

    const [customerNameUpdate, setCustomerNameUpdate] = useState(customerToEdit.customerName)
    const [emailUpdate, setEmailUpdate] = useState(customerToEdit.email)
    const [phoneNumberUpdate, setPhoneNumberUpdate] = useState(customerToEdit.phoneNumber)

    const handleReset = () => {
        setCustomerNameUpdate(customerToEdit.customerName)
        setEmailUpdate(customerToEdit.email)
        setPhoneNumberUpdate(customerToEdit.phoneNumber)
    }

    const handleSubmit = () => {
        if (customerNameUpdate === '' || emailUpdate === '' || phoneNumberUpdate === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Update"
            const customerID = customerToEdit.customerID
            const newCustomer = async () => {
                const newCustomerValues = {
                    action,
                    customerNameUpdate,
                    emailUpdate,
                    phoneNumberUpdate,
                    customerID
                }
                const response = await fetch('/api/Customers', {
                    method: 'POST',
                    body: JSON.stringify(newCustomerValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully updated the Customer!\nYou will now be redirected to the Customers Page.")
                    navigate("/Customers")
                } else {
                    alert("Failed to update Customer, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will update this Customer with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newCustomer()
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Update Customer</strong></legend>
            <label>Customer ID:</label>
            <input type="text"
                id="customerID"
                value={customerToEdit.customerID} disabled />
            <label>Customer Name:</label>
            <input type="text"
                id="customerName"
                maxLength="100"
                value={customerNameUpdate}
                onChange={e => setCustomerNameUpdate(e.target.value)} />
            <br />
            <label>Email:</label>
            <br />
            <input type="text"
                id="email"
                maxLength="100"
                value={emailUpdate}
                onChange={e => setEmailUpdate(e.target.value)} />
            <br />
            <label>Phone Number:</label>
            <input type="tel"
                id="phoneNumber"
                maxLength="13"
                value={phoneNumberUpdate}
                onChange={e => setPhoneNumberUpdate(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Customers"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<CustomerSearchComponent/>