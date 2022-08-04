import React from 'react'
import OrderRowComponent from "./OrderRowComponent";

export default function OrderTableComponent(
    { orders, setOrderToEdit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Address ID</th>
                    <th>Ship Date and Time</th>
                    <th colSpan="4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, i) =>
                    <OrderRowComponent
                        order={order}
                        key={i}
                        setOrderToEdit={setOrderToEdit}
                    />)}
            </tbody>
        </table>
    )
}
