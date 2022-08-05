import React from 'react'
import OrderIDDynamicSelectAddOptionComponent from "./OrderIDDynamicSelectAddOptionComponent";

export default function OrderIDDynamicSelectAddComponent(
    {orders, orderID, setOrderID}) {

    return (
        <select id="orderID" value={orderID} onChange={e => setOrderID(e.target.value)}>
            <option value="" selected disabled hidden>Select</option>
            {orders.map((order, i) =>
                <OrderIDDynamicSelectAddOptionComponent
                    order={order}
                    key={i}
                />)}
        </select>
    )
}
