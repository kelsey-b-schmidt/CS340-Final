import React from 'react'
import {Link} from "react-router-dom";
import OrderDetailsBrowseComponent from "../../Components/OrderDetails/OrderDetailsBrowseComponent";
import {useEffect} from "react";

export default function OrderDetails({orderDetails, setOrderDetails, setOrderDetailToEdit}) {

    useEffect(() => {
        const getOrders = async() => {
            const response = await fetch("/api/OrderDetails")
            const responseJson = await response.json()
            setOrderDetails(responseJson)
        }
        getOrders()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Order Details</h2>
            <Link to="/OrderDetailsAdd"><button>Add Order Detail</button></Link>
            <br/>
            <br/>
            <OrderDetailsBrowseComponent
                orderDetails={orderDetails}
                setOrderDetailToEdit={setOrderDetailToEdit}/>
        </div>
    )
}
