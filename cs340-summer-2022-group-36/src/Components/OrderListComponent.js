import React from 'react'
import OrderComponent from "./OrderComponent";

export default function OrderListComponent(
    {orders}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Order ID</th>
                <th>Address ID</th>
                <th>Customer ID</th>
                <th>Ship Date and TIme</th>
                <th colSpan="4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, i) =>
                    <OrderComponent
                        order={order}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
