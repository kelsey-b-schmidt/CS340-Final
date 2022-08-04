import React from 'react'

export default function AddressIDDynamicSelectAddOptionComponent(
    { address }) {

    return (
    <option value={address.addressID}>{address.addressID} - {address.recipient}</option>
    )
}
