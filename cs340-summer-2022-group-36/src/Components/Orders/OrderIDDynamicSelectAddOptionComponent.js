import React from 'react'

export default function OrderIDDynamicSelectAddOptionComponent(
    { order }) {

    return (
    <option value={order.orderID}>Order ID: {order.orderID} - Customer ID: {order.customerID} - Address ID: {order.addressID}</option>
    )
}
