import React from 'react'
import AddressIDDynamicSelectOptionComponent from "./AddressIDDynamicSelectOptionComponent";

export default function AddressIDDynamicSelectAddComponent(
    {addresses, setAddressID}) {
    return (
        <select id="addressID" onChange={e => setAddressID(e.target.value)}>
            <option value="none" selected disabled hidden>Select</option>
            {addresses.map((address, i) =>
                <AddressIDDynamicSelectOptionComponent
                    address={address}
                    key={i}
                />)}
        </select>
    )
}
