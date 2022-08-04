import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerIDDynamicSelectAddComponent from "../../Components/Customers/CustomerIDDynamicSelectAddComponent";
import {useEffect} from "react";

export default function Address( {customers, setCustomers} ) {

    useEffect(() => {       // load customers for selection
        const getCustomers = async() => {
            const response = await fetch("/api/Customers")
            const responseJson = await response.json()
            setCustomers(responseJson)
        }
        getCustomers()
            .catch(console.error)
    }, [])

    const navigate = useNavigate()

    const [customerID, setCustomerID] = useState('')
    const [recipient, setRecipient] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [isActive, setIsActive] = useState(0)
    const [isPrimary, setIsPrimary] = useState(0)

    const handleReset = () => {
        setRecipient('')
        setStreet('')
        setCity('')
        setState('')
        setZip('')
        setIsActive(0)
        setIsPrimary(0)
    }

    const numericZip = (e) => {
        const value = e.target.value.replace(/\D/g, "")
        setZip(value)
    }

    const handleActiveChange = () => {
        if(isActive === 0) {
            setIsActive(1)
        }
        else if (isActive === 1) {
            setIsActive(0)
        }
    }

    const handlePrimaryChange = () => {
        if(isPrimary === 0) {
            setIsPrimary(1)
        }
        else if (isPrimary === 1) {
            setIsPrimary(0)
        }
    }

    const handleSubmit = () => {
        if (customerID === '' || recipient === '' || street === '' || city === ''
            || state === '' || zip === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else if (zip.length !== 5 ){
            alert("Error: Invalid zip code. Please correct the zip value.")
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
                newAddress()     // the new data has already loaded into the component
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Add a new Address</strong></legend>
            <label>Customer ID:</label>
                <br/>
                <CustomerIDDynamicSelectAddComponent
                    customers={customers}
                    setCustomerID={setCustomerID}
                />
                <br/>
            <label>Recipient:</label>
                <input type="text"
                    id="recipient"
                    title="Name of the recipient. Example: Shelandra Wyatt"
                    maxLength="100"
                    value={recipient}
                    onChange={e => setRecipient(e.target.value)} />
            <label>Street:</label>
                <input type="text"
                    id="street"
                    title="The number and street name for the address. Example: 12345 Vitruvian Way"
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
                <br/>
                <select id="state"
                        onChange={e => setState(e.target.value)}>
                    <option value="none" selected disabled hidden>Select</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="AS">American Samoa</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="CM">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="TT">Trust Territories</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <br/>
            <label>Zip:</label>
                <br />
                <input type="text"
                    id="zip"
                    title="Please enter 5 digit zip only. Example: 10101"
                    maxLength="10"
                    value={zip}
                    onChange={numericZip} />
                <br />
            <label>isPrimary:</label>
                <br />
                <input type="checkbox"
                       id="isPrimary"
                       onChange={handlePrimaryChange} />
                <br />
            <label>isActive:</label>
                <br />
                <input type="checkbox"
                    id="isActive"
                    onChange={handleActiveChange} />
                <br />
                <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Addresses"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<AddressSearchComponent/>