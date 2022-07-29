import React from 'react'

export default function CustomerRowComponent(
    {customer}) {
    return (
        <tr>
            <td>{customer.customerID}</td>
            <td>{customer.customerName}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber}</td>
            <td>
                <input type="button" value="Update"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick='confirm("This will delete the selected customer.\nAre you sure you want to submit?")'
                />
            </td>
            <td>
                <input type="button" value="See Addresses"/>
            </td>
            <td>
                <input type="button" value="See Orders"/>
            </td>
        </tr>
    )
}
