import React from 'react'
import OrderDetailsTableComponent from "./OrderDetailsTableComponent";
import { useEffect, useState } from "react";

export default function OrderDetailsBrowseComponent({ setOrderDetailToEdit }) {

    const [orderDetails, setOrderDetails] = useState([])

    useEffect(() => {
        const getResponse = async () => {
            const response = await fetch("/api/OrderDetails")
            const responseJson = await response.json()
            setOrderDetails(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <fieldset>
            <legend><strong>Browse OrderDetails</strong></legend>
            <OrderDetailsTableComponent
                orderDetails={orderDetails}
                setOrderDetailToEdit={setOrderDetailToEdit}
            />
        </fieldset>
    )
}