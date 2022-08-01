import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrderDetails({ orderDetailsToEdit }) {

    const navigate = useNavigate()

    const [orderIDUpdate, setOrderIDUpdate] = useState(orderDetailsToEdit.orderID)
    const [productIDUpdate, setProductIDUpdate] = useState(orderDetailsToEdit.productID)
    const [productQuantityUpdate, setProductQuantityUpdate] = useState(orderDetailsToEdit.productQuantity)
    const [unitPriceUpdate, setUnitPriceUpdate] = useState(orderDetailsToEdit.unitPrice)


    const handleReset = () => {
        setOrderIDUpdate(orderDetailsToEdit.orderID)
        setProductIDUpdate(orderDetailsToEdit.productID)
        setProductQuantityUpdate(orderDetailsToEdit.productQuantity)
        setUnitPriceUpdate(orderDetailsToEdit.unitPrice)
    }

    const handleSubmit = () => {
        if (orderIDUpdate === '' || productIDUpdate === '' || productQuantityUpdate === ''
            || unitPriceUpdate === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Add"
            const orderID = orderDetailsToEdit.orderID
            const newOrderDetail = async () => {
                const newOrderDetailValues = {
                    action,
                    orderIDUpdate,
                    productIDUpdate,
                    productQuantityUpdate,
                    unitPriceUpdate
                }
                const response = await fetch('/api/OrderDetails', {
                    method: 'POST',
                    body: JSON.stringify(newOrderDetailValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully added the OrderDetail!\nYou will now be redirected to the OrderDetails Page.")
                    navigate("/OrderDetails")
                } else {
                    alert("Failed to add OrderDetail, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will create a new OrderDetail with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newOrderDetail()
                    .catch(console.error)
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Update Order Details</strong></legend>
            <label>Order ID:</label>
            <input type="text"
                id="orderID"
                value={orderDetailsToEdit.orderID} disabled />
            <label>Product ID:</label>
            <input type="text"
                id="productID"
                maxLength="1000"
                value={productIDUpdate}
                onChange={e => setProductIDUpdate(e.target.value)} />
            <br />
            <label>Product Quantity:</label>
            <br />
            <input type="number"
                id="productQuantity"
                min="0"
                max="10000"
                value={productQuantityUpdate}
                onChange={e => setProductQuantityUpdate(e.target.value)} />
            <br />
            <label>Unit Price:</label>
            <br />
            <input type="number"
                id="unitPrice"
                min="0"
                max="10000"
                value={unitPriceUpdate}
                onChange={e => setUnitPriceUpdate(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/OrderDetails"><button>Cancel</button></Link>
        </fieldset>
    )
}

