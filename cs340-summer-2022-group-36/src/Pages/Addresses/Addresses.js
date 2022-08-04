import React from 'react'
import { Link } from "react-router-dom";
import AddressBrowseComponent from "../../Components/Addresses/AddressBrowseComponent";
import {useEffect} from "react";
//import AddressSearchComponent from "../../Components/Addresses/AddressSearchComponent";

export default function Addresses({addresses, setAddresses, setAddressToEdit }) {

    useEffect(() => {
        const getAddresses = async() => {
            const response = await fetch("/api/Addresses")
            const responseJson = await response.json()
            setAddresses(responseJson)
        }
        getAddresses()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Addresses</h2>
            <Link to="/AddressesAdd"><button>Add a new Address</button></Link>
            <br />
            <br />
            <AddressBrowseComponent
                addresses={addresses}
                setAddressToEdit={setAddressToEdit}
            />
        </div>
    )
}

//<AddressSearchComponent/>