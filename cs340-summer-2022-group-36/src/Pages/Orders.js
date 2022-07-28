import React from 'react'
import {useState, useEffect } from 'react'
import OrderListComponent from "../Components/OrderListComponent";
import OrderSearchComponent from "../Components/OrderSearchComponent";

export default function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api/Orders")
            const responseJson = await response.json()
            setOrders(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Orders</h2>
            <div class="table">
                <fieldset>
                    <legend><strong>Browse Orders</strong></legend>
                    <OrderListComponent
                        orders={orders}
                    />
                </fieldset>
            </div>
            <br/>
            <input type="button" value="Add New Order"/>
            <br/>
            <br/>
        </div>
    )
}

//<OrderSearchComponent/>