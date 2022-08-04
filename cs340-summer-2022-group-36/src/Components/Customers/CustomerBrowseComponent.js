import React from 'react'
import CustomerTableComponent from "./CustomerTableComponent";

export default function CustomerBrowseComponent({customers, setCustomerToEdit}) {

    return (
        <fieldset>
            <legend><strong>Browse Customers</strong></legend>
            <CustomerTableComponent
                customers={customers}
                setCustomerToEdit={setCustomerToEdit}
            />
        </fieldset>
    )
}