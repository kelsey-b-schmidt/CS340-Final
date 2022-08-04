import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Customers() {

    const navigate = useNavigate()

    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleReset = () => {
        setCustomerName('')
        setEmail('')
        setPhoneNumber('')
    }

    const validatePhoneNumber = (e) => {
        const value = e.target.value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
        setPhoneNumber(value)
    }

    const handleSubmit = () => {
        if (customerName === '' || email === '' || phoneNumber === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else if (phoneNumber.length !== 12 ){
            alert("Error: Invalid phone number. Please correct the phone number value.")
        }
        else {
            const action = "Add"
            const newCustomer = async () => {
                const newCustomerValues = {
                    action,
                    customerName,
                    email,
                    phoneNumber
                }
                const response = await fetch('/api/Customers', {
                    method: 'POST',
                    body: JSON.stringify(newCustomerValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully added the Customer!\nYou will now be redirected to the Customers Page.")
                    navigate("/Customers")
                } else {
                    alert("Failed to add Customer, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will create a new Customer with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newCustomer()    // the new data has already loaded into the component
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Add a new Customer</strong></legend>
            <label>Customer Name:</label>
            <input type="text"
                id="customerName"
                maxLength="100"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)} />
            <br />
            <label>Email:</label>
            <br />
            <input type="email"
                id="email"
                maxLength="100"
                value={email}
                title='Please enter in this format: example@example.com'
                onChange={e => setEmail(e.target.value)} />
            <br />
            <label>Phone Number:</label>
            <input type="text"
                id="phoneNumber"
                value={phoneNumber}
                maxLength="12"
                title='Please enter in this format: 123-456-1254'
                onChange={validatePhoneNumber} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Customers"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<CustomerSearchComponent/>