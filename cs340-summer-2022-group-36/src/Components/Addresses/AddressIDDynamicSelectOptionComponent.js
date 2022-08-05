import React from 'react'

export default function AddressIDDynamicSelectOptionComponent(
    { address }) {

    return (
    <option value={address.addressID}>{address.addressID} - {address.recipient}</option>
    )
}
