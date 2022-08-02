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

    const validatePhoneNumber = (input) =>{
        if (Number(input) === Number(input)){
            const correctInput = input.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
            setPhoneNumber(correctInput)
        } else {
            return false
        }
    }

    const handleSubmit = () => {
        if (customerName === '' || email === '' || phoneNumber === '') {
            alert("Please enter values!")
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
                newCustomer()
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
                placeholder='example@example.com'
                onChange={e => setEmail(e.target.value)} />
            <br />
            <label>Phone Number:</label>
            <input type="text"
                id="phoneNumber"
                value={phoneNumber}
                maxLength="12"
                placeholder='123-456-1254'
                onChange={e => validatePhoneNumber(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Customers"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<CustomerSearchComponent/>