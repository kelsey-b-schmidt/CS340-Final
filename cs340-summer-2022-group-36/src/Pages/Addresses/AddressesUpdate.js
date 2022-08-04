import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HandleBooleanActiveComponent from "../../Components/Addresses/HandleBooleanActiveComponent";
import HandleBooleanPrimaryComponent from "../../Components/Addresses/HandleBooleanPrimaryComponent";

export default function Address({ addressToEdit }) {

    const navigate = useNavigate()

    const [recipientUpdate, setRecipientUpdate] = useState(addressToEdit.recipient)
    const [streetUpdate, setStreetUpdate] = useState(addressToEdit.street)
    const [cityUpdate, setCityUpdate] = useState(addressToEdit.city)
    const [stateUpdate, setStateUpdate] = useState(addressToEdit.state)
    const [zipUpdate, setZipUpdate] = useState(addressToEdit.zip)
    const [isActiveUpdate, setIsActiveUpdate] = useState(addressToEdit.isActive)
    const [isPrimaryUpdate, setIsPrimaryUpdate] = useState(addressToEdit.isPrimary)

    const handleReset = () => {
        setRecipientUpdate(addressToEdit.recipient)
        setStreetUpdate(addressToEdit.street)
        setCityUpdate(addressToEdit.city)
        setStateUpdate(addressToEdit.state)
        setZipUpdate(addressToEdit.zip)
        setIsActiveUpdate(addressToEdit.isActive)
        setIsPrimaryUpdate(addressToEdit.isPrimary)
    }

    const numericZip = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setZipUpdate(value);
    }

    const handleSubmit = () => {
        if (recipientUpdate === '' || streetUpdate === '' || cityUpdate === ''
            || stateUpdate === '' || zipUpdate === '') {
            alert("Please enter values!")
        }
        else if (zipUpdate.length !== 5 ){
            alert("Error: Invalid zip code. Please correct the zip value.")
        }
        else {
            const action = "Update"
            const addressID = addressToEdit.addressID
            const newAddress = async () => {
                const newAddressValues = {
                    action,
                    recipientUpdate,
                    streetUpdate,
                    cityUpdate,
                    stateUpdate,
                    zipUpdate,
                    isActiveUpdate,
                    isPrimaryUpdate,
                    addressID
                }
                const response = await fetch('/api/Addresses', {
                    method: 'POST',
                    body: JSON.stringify(newAddressValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully updated the Address!\nYou will now be redirected to the Addresses Page.")
                    navigate("/Addresses")
                    window.location.reload() // need this to update the checkboxes, they're being difficult
                } else {
                    alert("Failed to update Address, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will update this Address with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newAddress()     // the new data has already loaded into the component
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Update Address</strong></legend>
            <label>Address ID:</label>
                <input type="text"
                    id="addressID"
                    value={addressToEdit.addressID} disabled />
            <label>Customer ID:</label>
            <input type="text"
                   id="customerID"
                   value={addressToEdit.customerID} disabled />
            <label>Recipient:</label>
                <input type="text"
                    id="recipient"
                    title="Name of the recipient. Example: Shelandra Wyatt"
                    maxLength="100"
                    value={recipientUpdate}
                    onChange={e => setRecipientUpdate(e.target.value)} />
            <label>Street:</label>
                <input type="text"
                    id="street"
                    title="The number and street name for the address. Example: 12345 Vitruvian Way"
                    maxLength="100"
                    value={streetUpdate}
                    onChange={e => setStreetUpdate(e.target.value)} />
                <br />
            <label>City:</label>
                <br />
                <input type="text"
                    id="city"
                    maxLength="100"
                    value={cityUpdate}
                    onChange={e => setCityUpdate(e.target.value)} />
                <br />
            <label>State:</label>
                <br/>
                <select id="state"
                        onChange={e => setStateUpdate(e.target.value)}>
                    <option value={stateUpdate} selected disabled hidden>{stateUpdate}</option>
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
                    value={zipUpdate}
                    onChange={numericZip} />
                <br />
            <label>Primary:</label>
                <br />
                <HandleBooleanPrimaryComponent
                    isPrimaryUpdate={isPrimaryUpdate}
                    setIsPrimaryUpdate={setIsPrimaryUpdate}
                />
                <br />
            <label>Active:</label>
                <br />
                <HandleBooleanActiveComponent
                    isActiveUpdate={isActiveUpdate}
                    setIsActiveUpdate={setIsActiveUpdate}
                />
                <br />
                <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Addresses"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<AddressSearchComponent/>