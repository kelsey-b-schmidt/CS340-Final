import React from 'react'
import CustomerIDDynamicSelectAddOptionComponent from "./CustomerIDDynamicSelectAddOptionComponent";

export default function CustomerIDDynamicSelectAddComponent(
    {customers, setCustomerID}) {
    return (
        <select id="customerID" onChange={e => setCustomerID(e.target.value)}>
            <option value="none" selected disabled hidden>Select</option>
            {customers.map((customer, i) =>
                <CustomerIDDynamicSelectAddOptionComponent
                    customer={customer}
                    key={i}
                />)}
        </select>
    )
}
