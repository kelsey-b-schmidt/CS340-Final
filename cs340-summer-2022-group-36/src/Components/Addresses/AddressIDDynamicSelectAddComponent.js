import React from 'react'
import AddressIDDynamicSelectAddOptionComponent from "./AddressIDDynamicSelectAddOptionComponent";

export default function AddressIDDynamicSelectAddComponent(
    {addresses, setAddressID}) {
    return (
        <select id="addressID" onChange={e => setAddressID(e.target.value)}>
            <option value="none" selected disabled hidden>Select</option>
            {addresses.map((address, i) =>
                <AddressIDDynamicSelectAddOptionComponent
                    address={address}
                    key={i}
                />)}
        </select>
    )
}
