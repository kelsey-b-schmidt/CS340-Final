import React from 'react'
import {useEffect, useState} from "react";
import AddressTableComponent from "./AddressTableComponent";

export default function AddressBrowseComponent() {

    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api/Addresses")
            const responseJson = await response.json()
            setAddresses(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <fieldset>
            <legend><strong>Browse Addresses</strong></legend>
            <AddressTableComponent
                addresses={addresses}
            />
        </fieldset>
    )
}