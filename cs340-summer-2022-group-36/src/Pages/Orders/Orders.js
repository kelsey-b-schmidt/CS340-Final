import React from 'react'
import { Link } from "react-router-dom";
import OrderBrowseComponent from "../../Components/Orders/OrderBrowseComponent";
import {useEffect} from "react";
//import OrderSearchComponent from "../Components/OrderSearchComponent";

export default function Orders({ orders, setOrders, setOrderToEdit }) {

    useEffect(() => {
        const getOrders = async() => {
            const response = await fetch("/api/Orders")
            const responseJson = await response.json()
            setOrders(responseJson)
        }
        getOrders()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Orders</h2>
            <Link to="/OrdersAdd"><button>Add a new Order</button></Link>
            <br />
            <br />
            <OrderBrowseComponent
                orders={orders}
                setOrderToEdit={setOrderToEdit}
            />
        </div>
    )
}

//<OrderSearchComponent/>