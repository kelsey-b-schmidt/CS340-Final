import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from "react";
import OrderIDDynamicSelectAddComponent from "../../Components/Orders/OrderIDDynamicSelectAddComponent";
import ProductIDDynamicSelectAddComponent from "../../Components/Products/ProductIDDynamicSelectAddComponent";

export default function OrderDetailsAdd({orders, setOrders, products, setProducts}) {

    const navigate = useNavigate()

    const [orderID, setOrderID] = useState('')
    const [productID, setProductID] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [unitPrice, setUnitPrice] = useState('')

    useEffect(() => {   // load orders for selection
        const getOrders = async() => {
            const response = await fetch("/api/Orders")
            const responseJson = await response.json()
            setOrders(responseJson)
        }
        getOrders()
            .catch(console.error)
    }, [])

    useEffect(() => {   // load products for selection
        const getProducts = async() => {
            const response = await fetch("/api/Products")
            const responseJson = await response.json()
            setProducts(responseJson)
        }
        getProducts()
            .catch(console.error)
    }, [])


    const handleReset = () => {
        setOrderID('')
        setProductID('')
        setProductQuantity('')
        setUnitPrice('')
    }

    const handleSubmit = () => {
        if (orderID === '' || productID === '' || productQuantity === ''
            || unitPrice === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else if (productQuantity < 1 || unitPrice < 0) {
            alert("Error: Product Quantity cannot be less than 1." +
                "\nUnit Price cannot be less than 0." +
                "\nPlease enter new values.")
        }
        else if (productQuantity > 10000 || unitPrice > 10000) {
            alert("Error: Numeric values cannot be more than than 10,000. Please enter new values.")
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
                    alert("Successfully added the Order Detail!\nYou will now be redirected to the Order Details Page.")
                    navigate("/OrderDetails")
                }
            }
            const answer = window.confirm("This will create a new Order Detail with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newOrderDetail()
                    .catch(error => {
                        alert('Failed to add Order Detail, please check the input and try again!')
                    })
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Add a new Order Detail</strong></legend>
            <label>Order ID:</label>
            <br/>
            <OrderIDDynamicSelectAddComponent
                orders={orders}
                orderID={orderID}
                setOrderID={setOrderID}
            />
            <br/>
            <label>Product ID:</label>
            <br/>
            <ProductIDDynamicSelectAddComponent
                products={products}
                productID={productID}
                setProductID={setProductID}
            />
            <br/>
            <label>Product Quantity:</label>
            <br/>
            <input type="number"
                   id="product quantity"
                   min="0"
                   max="10000"
                   value={productQuantity}
                   onChange={e => setProductQuantity(e.target.value)}/>
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
                   value={unitPrice}
                   onChange={e => setUnitPrice(e.target.value)}/>
            <br/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/OrderDetails"><button>Cancel</button></Link>
        </fieldset>
    )
}

