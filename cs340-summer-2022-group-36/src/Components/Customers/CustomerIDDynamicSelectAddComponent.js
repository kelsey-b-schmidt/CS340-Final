import React from 'react'
import CustomerIDDynamicSelectAddOptionComponent from "./CustomerIDDynamicSelectAddOptionComponent";

export default function CustomerIDDynamicSelectAddComponent(
    {customers, customerID, setCustomerID}) {

    return (
        <select id="customerID" value={customerID} onChange={e => setCustomerID(e.target.value)}>
            <option value="" selected disabled hidden>Select</option>
            {customers.map((customer, i) =>
                <CustomerIDDynamicSelectAddOptionComponent
                    customer={customer}
                    key={i}
                />)}
        </select>
    )
}
