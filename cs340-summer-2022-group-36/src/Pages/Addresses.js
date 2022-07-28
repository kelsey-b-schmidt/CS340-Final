import React from 'react'
import {useState, useEffect } from 'react'
import AddressListComponent from "../Components/AddressListComponent";
import AddressSearchComponent from "../Components/AddressSearchComponent";

export default function Addresses() {

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
        <div>
            <h2>Addresses</h2>
            <div class="table">
                <fieldset>
                    <legend><strong>Browse Addresses</strong></legend>
                    <AddressListComponent
                        addresses={addresses}
                    />
                </fieldset>
            </div>
            <br/>
            <input type="button" value="Add New Address"/>
            <br/>
            <br/>
        </div>
    )
}

//<AddressSearchComponent/>