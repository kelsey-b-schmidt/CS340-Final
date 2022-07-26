import React from 'react'


export default function CustomerComponent(
    {customer}) {
    return (
        <tr>
            <td>{customer.customerID}</td>
            <td>{customer.customerName}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber}</td>
            <td>Update</td>
            <td>Delete</td>
            <td>See Addresses</td>
            <td>See Orders</td>
        </tr>
    )
}
