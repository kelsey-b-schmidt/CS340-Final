import React from 'react'
import CustomerRowComponent from "./CustomerRowComponent";

export default function CustomerTableComponent(
    {customers, setCustomerToEdit}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, i) =>
                    <CustomerRowComponent
                        customer={customer}
                        key={i}
                        setCustomerToEdit={setCustomerToEdit}
                    />)}
            </tbody>
        </table>
    )
}
