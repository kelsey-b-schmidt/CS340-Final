import React from 'react'
import AddressIDDynamicSelectOptionComponent from "./AddressIDDynamicSelectOptionComponent";

export default function AddressIDDynamicSelectUpdateComponent(
    {addressIDUpdate, addresses, setAddressIDUpdate}) {
    return (
        <select id="addressID" value={addressIDUpdate} onChange={e => setAddressIDUpdate(e.target.value)}>
            <option value={addressIDUpdate} selected disabled hidden>{addressIDUpdate}</option>
            {addresses.map((address, i) =>
                <AddressIDDynamicSelectOptionComponent
                    address={address}
                    key={i}
                />)}
        </select>
    )
}
