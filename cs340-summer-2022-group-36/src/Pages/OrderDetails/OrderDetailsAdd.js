import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrderDetails() {

    const navigate = useNavigate()

    const [orderID, setOrderID] = useState('')
    const [productID, setProductID] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [unitPrice, setUnitPrice] = useState('')


    const handleReset = () => {
        setOrderID('')
        setProductID('')
        setProductQuantity('')
        setUnitPrice('')
    }

    const handleSubmit = () => {
        if (orderID === '' || productID === '' || productQuantity === ''
            || unitPrice === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Add"
            const newOrderDetail = async () => {
                const newOrderDetailValues = {
                    action,
                    orderID,
                    productID,
                    productQuantity,
                    unitPrice
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
            <legend><strong>Add Order Details</strong></legend>
            <label>Order ID:</label>
            <input type="text"
                id="orderID"
                maxLength="100"
                value={orderID}
                onChange={e => setOrderID(e.target.value)} />
            <label>Product ID:</label>
            <input type="text"
                id="productID"
                maxLength="1000"
                value={productID}
                onChange={e => setProductID(e.target.value)} />
            <br />
            <label>Product Quantity:</label>
            <br/>
            <input type="number"
                id="productQuantity"
                min="0"
                max="10000"
                value={productQuantity}
                onChange={e => setProductQuantity(e.target.value)} />
            <br/>
            <label>Unit Price:</label>
            <br />
            <input type="number"
                id="unitPrice"
                min="0"
                max="10000"
                value={unitPrice}
                onChange={e => setUnitPrice(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/OrderDetails"><button>Cancel</button></Link>
        </fieldset>
    )
}

