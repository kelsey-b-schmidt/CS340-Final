import React from 'react'
import AddressIDDynamicSelectOptionComponent from "./AddressIDDynamicSelectOptionComponent";

export default function AddressIDDynamicSelectUpdateComponent(
    {addressIDUpdate, addresses, setAddressID}) {
    return (
        <select id="addressID" onChange={e => setAddressID(e.target.value)}>
            <option value={addressIDUpdate} selected disabled hidden>{addressIDUpdate}</option>
            {addresses.map((address, i) =>
                <AddressIDDynamicSelectOptionComponent
                    address={address}
                    key={i}
                />)}
        </select>
    )
}
