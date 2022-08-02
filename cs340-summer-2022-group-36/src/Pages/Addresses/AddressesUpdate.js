import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Address({ addressToEdit }) {

    const navigate = useNavigate()

    const [recipientUpdate, setRecipientNameUpdate] = useState(addressToEdit.recipient)
    const [streetUpdate, setStreetUpdate] = useState(addressToEdit.street)
    const [cityUpdate, setCityUpdate] = useState(addressToEdit.city)
    const [stateUpdate, setStateUpdate] = useState(addressToEdit.state)
    const [zipUpdate, setZipUpdate] = useState(addressToEdit.zip)
    const [isActiveUpdate, setIsActiveUpdate] = useState(addressToEdit.isActive)
    const [isPrimaryUpdate, setIsPrimaryUpdate] = useState(addressToEdit.isPrimary)

    const handleReset = () => {
        setRecipientNameUpdate(addressToEdit.recipient)
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
    };

    const handleActiveChange = (e) => {
        let isChecked = e.target.checked
        if (isChecked) {
            e.target.value = 1
            setIsActiveUpdate(e.target.value)
        } else {
            e.target.value = 0
            setIsActiveUpdate(e.target.value)
        }
    };

    const handlePrimaryChange = (e) => {
        let isChecked = e.target.checked
        if (isChecked) {
            e.target.value = 1
            setIsPrimaryUpdate(e.target.value)
        } else {
            e.target.value = 0
            setIsPrimaryUpdate(e.target.value)
        }
    };

    const handleSubmit = () => {
        if (recipientUpdate === '' || streetUpdate === '' || cityUpdate === ''
            || stateUpdate === '' || zipUpdate === '') {
            alert("Please enter values!")
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
                } else {
                    alert("Failed to update Address, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will update this Address with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newAddress()
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
            <label>Recipient:</label>
            <input type="text"
                id="recipient"
                maxLength="100"
                value={recipientUpdate}
                onChange={e => setRecipientNameUpdate(e.target.value)} />
             <br />
            <label>Street:</label>
            <input type="text"
                id="street"
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
            <br />
            <input type="text"
                id="state"
                maxLength="2"
                value={stateUpdate}
                onChange={e => setStateUpdate(e.target.value)} />
            <br />
            <label>Zip:</label>
            <br />
            <input type="text"
                id="zip"
                maxLength="10"
                value={zipUpdate}
                onChange={numericZip} />
            <br />
            <label>isActive:</label>
            <br />
            <input type="checkbox"
                id="isActive"
                value={isActiveUpdate}
                onChange={e => handleActiveChange(e)} />
            <br />
            <label>isPrimary:</label>
            <br />
            <input type="checkbox"
                id="isPrimary"
                value={isPrimaryUpdate}
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