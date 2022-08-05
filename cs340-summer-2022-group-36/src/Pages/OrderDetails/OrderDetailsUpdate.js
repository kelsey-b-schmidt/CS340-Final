import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrderDetails({ orderDetailToEdit }) {

    const navigate = useNavigate()

    const orderID = orderDetailToEdit.orderID
    const [productQuantityUpdate, setProductQuantityUpdate] = useState(orderDetailToEdit.productQuantity)
    const [unitPriceUpdate, setUnitPriceUpdate] = useState(orderDetailToEdit.unitPrice)


    const handleReset = () => {
        setProductQuantityUpdate(orderDetailToEdit.productQuantity)
        setUnitPriceUpdate(orderDetailToEdit.unitPrice)
    }

    const handleSubmit = () => {
        if (productQuantityUpdate === ''
            || unitPriceUpdate === '') {
            alert("Please enter values!")
        }
        else if (productQuantityUpdate < 1 || unitPriceUpdate < 0) {
            alert("Error: Product Quantity cannot be less than 1." +
                "\nUnit Price cannot be less than 0." +
                "\nPlease enter new values.")
        }
        else if (productQuantityUpdate > 10000 || unitPriceUpdate > 10000) {
            alert("Error: Numeric values cannot be more than than 10,000. Please enter new values.")
        }
        else {
            const action = "Update"
            const newOrderDetail = async () => {
                const newOrderDetailValues = {
                    action,
                    productQuantityUpdate,
                    unitPriceUpdate,
                    orderID
                }
                const response = await fetch('/api/OrderDetails', {
                    method: 'POST',
                    body: JSON.stringify(newOrderDetailValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully updated the OrderDetail!\nYou will now be redirected to the Order Details Page.")
                    navigate("/OrderDetails")
                }
            }
            const answer = window.confirm("This will update this OrderDetail with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newOrderDetail()
                    .catch(error => {
                        alert('Failed to update Order Detail, please check the input and try again!')
                    })
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Update Order Details</strong></legend>
            <label>Order ID:</label>
            <input type="text"
                id="orderID"
                value={orderDetailToEdit.orderID} disabled />
            <label>Product ID:</label>
            <br/>
            <input type="text"
                   id="productID"
                   value={orderDetailToEdit.productID} disabled/>
            <br />
            <label>Product Quantity:</label>
            <br/>
            <input type="number"
                   id="product quantity"
                   min="0"
                   max="10000"
                   value={productQuantityUpdate}
                   onChange={e => setProductQuantityUpdate(e.target.value)}/>
            <br/>
            <label>Unit Price:</label>
            <br/>
            <span>$ </span>
            <input type="number"
                   id="sellPrice"
                   title="What the customer pays for the product"
                   step='0.01'
                   min="0"
                   max="10000"
                   value={unitPriceUpdate}
                   onChange={e => setUnitPriceUpdate(e.target.value)}/>
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/OrderDetails"><button>Cancel</button></Link>
        </fieldset>
    )
}

