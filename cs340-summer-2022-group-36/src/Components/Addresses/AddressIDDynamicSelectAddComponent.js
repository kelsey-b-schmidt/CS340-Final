import React from 'react'
import AddressIDDynamicSelectOptionComponent from "./AddressIDDynamicSelectOptionComponent";

export default function AddressIDDynamicSelectAddComponent(
    {addresses, addressID, setAddressID}) {
    return (
        <select id="addressID" value={addressID} onChange={e => setAddressID(e.target.value)}>
            <option value="" selected disabled hidden>Select</option>
            {addresses.map((address, i) =>
                <AddressIDDynamicSelectOptionComponent
                    address={address}
                    key={i}
                />)}
        </select>
    )
}
