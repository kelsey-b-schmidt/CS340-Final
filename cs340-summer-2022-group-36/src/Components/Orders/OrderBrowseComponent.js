import React from 'react'
import OrderTableComponent from "./OrderTableComponent";
import { useEffect, useState } from "react";

export default function OrderBrowseComponent({ setOrderToEdit }) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getResponse = async () => {
            const response = await fetch("/api/Orders")
            const responseJson = await response.json()
            setOrders(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

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