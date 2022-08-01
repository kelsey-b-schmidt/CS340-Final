import React from 'react'
import OrderDetailsRowComponent from "./OrderDetailsRowComponent";

export default function OrderDetailsTableComponent(
    { orderDetails, setOrderDetailsToEdit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Order Detail ID</th>
                    <th>Order ID</th>
                    <th>Product ID</th>
                    <th>Product Quantity</th>
                    <th>Unit Price</th>
                    <th>Line Total</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {orderDetails.map((orderDetails, i) =>
                    <OrderDetailsRowComponent
                    orderDetails={orderDetails}
                        key={i}
                        setOrderDetailsToEdit={setOrderDetailsToEdit}
                    />)}
            </tbody>
        </table>
    )
}
