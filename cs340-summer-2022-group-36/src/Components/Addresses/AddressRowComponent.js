import React from 'react'
import {useNavigate} from "react-router-dom";

export default function AddressRowComponent(
    {address, setAddressToEdit}) {

    const navigate = useNavigate()

    const addressID = address.addressID

    const onUpdate = () => {
        setAddressToEdit(address)
        navigate("/AddressesUpdate")
    }

    const onDelete = () => {
        const deleteAddress = async () => {
            const action = "Delete"

            const newAddressValues = {
                action, addressID
            }
            const response = await fetch('/api/Addresses', {
                method: 'POST',
                body: JSON.stringify(newAddressValues),
                headers: {'Content-Type': 'application/json'},
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully deleted the Address!\nThe page will now reload.")
                window.location.reload(false)
            }
        }
        const answer = window.confirm("This will delete the selected Address.\nDo you wish to proceed?")
        if (answer) {
            deleteAddress()
                .catch(error => {
                    alert('This Address is in use with an Order and cannot be deleted.')
                })
        }
    }

    const handleBoolean = (input) => {
        if(input === 0) {
            return <input type="checkbox" disabled/>
        }
        else if (input === 1) {
            return <input type="checkbox" checked disabled/>
        }
    }

    return (
        <tr>
            <td>{address.addressID}</td>
            <td>{address.customerID}</td>
            <td>{address.recipient}</td>
            <td>{address.street}</td>
            <td>{address.city}</td>
            <td>{address.state}</td>
            <td>{address.zip}</td>
            <td>{handleBoolean(address.isPrimary)}</td>
            <td>{handleBoolean(address.isActive)}</td>
            <td>
                <input type="button" value="Update" onClick={onUpdate}/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick={onDelete}
                />
            </td>
        </tr>
    )
}
