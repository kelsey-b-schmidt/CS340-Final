import React from 'react'
import CustomerRowComponent from "./CustomerRowComponent";

export default function CustomerTableComponent(
    {customers}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th colSpan="4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, i) =>
                    <CustomerRowComponent
                        customer={customer}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
