import React from 'react'
import AddressRowComponent from "./AddressRowComponent";

export default function AddressTableComponent(
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
                    <AddressRowComponent
                        address={address}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
