import React from 'react'
import AddressTableComponent from "./AddressTableComponent";

export default function AddressBrowseComponent({ addresses, setAddressToEdit }) {

    return (
        <fieldset>
            <legend><strong>Browse Addresses</strong></legend>
            <AddressTableComponent
                addresses={addresses}
                setAddressToEdit={setAddressToEdit}
            />
        </fieldset>
    )
}