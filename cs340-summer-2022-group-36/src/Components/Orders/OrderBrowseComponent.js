import React from 'react'
import OrderTableComponent from "./OrderTableComponent";

export default function OrderBrowseComponent({ orders, setOrderToEdit }) {

    return (
        <fieldset>
            <legend><strong>Browse Orders</strong></legend>
            <OrderTableComponent
                orders={orders}
                setOrderToEdit={setOrderToEdit}
            />
        </fieldset>
    )
}