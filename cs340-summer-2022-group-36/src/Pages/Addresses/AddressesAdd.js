import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Address() {

    const navigate = useNavigate()

    const [customerID, setCustomerID] = useState('')
    const [recipient, setRecipientName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [isActive, setIsActive] = useState(0)
    const [isPrimary, setIsPrimary] = useState(1)

    const handleReset = () => {
        setRecipientName('')
        setStreet('')
        setCity('')
        setState('')
        setZip('')
        setIsActive('')
        setIsPrimary('')
    }

    const numericZip = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setZip(value);
    };

    const handleActiveChange = (e) => {
        let isChecked = e.target.checked
        if (isChecked) {
            e.target.value = 1
            setIsActive(e.target.value)
        } else {
            e.target.value = 0
            setIsActive(e.target.value)
        }
    };

    const handlePrimaryChange = (e) => {
        let isChecked = e.target.checked
        if (isChecked) {
            e.target.value = 1
            setIsPrimary(e.target.value)
        } else {
            e.target.value = 0
            setIsPrimary(e.target.value)
        }
    };

    const handleSubmit = () => {
        if (customerID == '' || recipient === '' || street === '' || city === ''
            || state === '' || zip === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Add"
            const newAddress = async () => {
                const newAddressValues = {
                    action,
                    customerID,
                    recipient,
                    street,
                    city,
                    state,
                    zip,
                    isActive,
                    isPrimary
                }
                const response = await fetch('/api/Addresses', {
                    method: 'POST',
                    body: JSON.stringify(newAddressValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully added the Address!\nYou will now be redirected to the Addresses Page.")
                    navigate("/Addresses")
                } else {
                    alert("Failed to add Address, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will create a new Address with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newAddress()
                    .catch(console.error)
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Add a new Address</strong></legend>
            <label>Customer ID:</label>
            <input type="text"
                id="customerID"
                maxLength="100"
                value={customerID}
                onChange={e => setCustomerID(e.target.value)} />
            <label>Recipient:</label>
            <input type="text"
                id="recipient"
                maxLength="100"
                value={recipient}
                onChange={e => setRecipientName(e.target.value)} />
            <label>Street:</label>
            <input type="text"
                id="street"
                maxLength="100"
                value={street}
                onChange={e => setStreet(e.target.value)} />
            <br />
            <label>City:</label>
            <br />
            <input type="text"
                id="city"
                maxLength="100"
                value={city}
                onChange={e => setCity(e.target.value)} />
            <br />
            <label>State:</label>
            <br />
            <input type="text"
                id="state"
                maxLength="2"
                value={state}
                onChange={e => setState(e.target.value)} />
            <br />
            <label>Zip:</label>
            <br />
            <input type="text"
                id="zip"
                maxLength="10"
                value={zip}
                onChange={numericZip} />
            <br />
            <label>isActive:</label>
            <br />
            <input type="checkbox"
                id="isActive"
                value={isActive}
                onChange={e => handleActiveChange(e)} />
            <br />
            <label>isPrimary:</label>
            <br />
            <input type="checkbox"
                id="isPrimary"
                defaultChecked={true}
                value={isPrimary}
                onChange={e => handlePrimaryChange(e)} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Addresses"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<AddressSearchComponent/>