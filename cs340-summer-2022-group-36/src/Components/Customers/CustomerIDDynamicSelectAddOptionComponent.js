import React from 'react'

export default function CustomerIDDynamicSelectAddOptionComponent(
    { customer }) {

    return (
    <option value={customer.customerID}>{customer.customerID} - {customer.customerName}</option>
    )
}
