import React from 'react'

export default function AddressComponent(
    {address}) {

    const handleBoolean = (input) => {
        if(input === 0) {
            return <input type="checkbox" disabled/>
        }
        else if (input ===1) {
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
            <td>{handleBoolean(address.isActive)}</td>
            <td>{handleBoolean(address.isPrimary)}</td>
            <td>
                <input type="button" value="Update"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick='confirm("This will delete the selected address.\nAre you sure you want to submit?")'
                />
            </td>
        </tr>
    )
}
