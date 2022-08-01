import React from 'react'
import { Link } from "react-router-dom";
import AddressBrowseComponent from "../../Components/Addresses/AddressBrowseComponent";
//import AddressSearchComponent from "../Components/AddressSearchComponent";

export default function Addresses({ setAddressToEdit }) {

    return (
        <div>
            <h2>Addresses</h2>
            <Link to="/AddressesAdd"><button>Add a new Address</button></Link>
            <br />
            <br />
            <AddressBrowseComponent
                setAddressToEdit={setAddressToEdit} />
        </div>
    )
}

//<AddressSearchComponent/>
//<Link to="/AddressesAdd"><button>Add a new Address</button></Link> (link inside button, when finished)