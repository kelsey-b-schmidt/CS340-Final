import React from 'react'
import OrderRowComponent from "./OrderRowComponent";

export default function OrderTableComponent(
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
                    <OrderRowComponent
                        order={order}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
