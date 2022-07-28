import React from 'react'
import AddressComponent from "./AddressComponent";

export default function AddressListComponent(
    {addresses}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Address ID</th>
                <th>Customer ID</th>
                <th>Recipient</th>
                <th colSpan="4">Address</th>
                <th>Primary</th>
                <th>Active</th>
                <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {addresses.map((address, i) =>
                    <AddressComponent
                        address={address}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
