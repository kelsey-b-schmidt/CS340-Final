import React from 'react'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function ProductsUpdate() {

    const navigate = useNavigate()

    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [weightVal, setWeightVal] = useState('')
    const [weightUnit, setWeightUnit] = useState('')
    const [sellPrice, setSellPrice] = useState('')
    const [replenishCost, setReplenishCost] = useState('')
    const [numberInStock, setNumberInStock] = useState('')

    const handleReset = () => {
        setProductName('')
        setDescription('')
        setBrand('')
        setWeightVal('')
        setWeightUnit('')
        setSellPrice('')
        setReplenishCost('')
        setNumberInStock('')
    }

    const handleSubmit = () => {
        if (productName === '' || description === ''|| brand === ''
            || weightVal === ''|| weightUnit === ''|| sellPrice === ''
            || replenishCost === ''|| numberInStock === '') {
            alert("Please enter values!")
        }
        else {
            const action = "Add"
            const newProduct = async () => {
                const newProductValues = {
                    action,
                    productName,
                    description,
                    brand,
                    weightVal,
                    weightUnit,
                    sellPrice,
                    replenishCost,
                    numberInStock
                }
                const response = await fetch('/api/Products', {
                    method: 'POST',
                    body: JSON.stringify(newProductValues),
                    headers: {'Content-Type': 'application/json'},
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully added the Product!\nYou will now be redirected to the Products Page.")
                    navigate("/Products")
                } else {
                    alert("Failed to add Product, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will create a new Product with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newProduct()
                    .catch(console.error)
            }
        }
    }



    return (
        <fieldset class="form">
            <legend><strong>Update a Product</strong></legend>
            <label>Product Name:</label>
            <input type="text"
                   id="productName"
                   maxLength="100"
                   value={productName}
                   onChange={e => setProductName(e.target.value)}/>
            <label>Description:</label>
            <input type="text"
                   id="description"
                   maxLength="1000"
                   value={description}
                   onChange={e => setDescription(e.target.value)}/>
            <label>Brand:</label>
            <input type="text"
                   id="brand"
                   maxLength="100"
                   value={brand}
                   onChange={e => setBrand(e.target.value)}/>


            <label>Weight Value:</label>
            <br/>
            <input type="number"
                   id="weightVal"
                   step='0.01'
                   min="0"
                   max="10000"
                   value={weightVal}
                   onChange={e => setWeightVal(e.target.value)}/>
            <br/>
            <label>Weight Unit:</label>
            <br/>
            <select id="weightUnit" onChange={e => setWeightUnit(e.target.value)}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="lbs">lbs</option>
                <option value="oz">oz</option>
            </select>
            <br/>
            <label>Sell Price:</label>
            <br/>
            <span>$ </span>
            <input type="number"
                   id="sellPrice"
                   step='0.01'
                   min="0"
                   max="10000"
                   value={sellPrice}
                   onChange={e => setSellPrice(e.target.value)}/>
            <br/>
            <label>Replenish Cost:</label>
            <br/>
            <span>$ </span>
            <input type="number"
                   id="replenish cost"
                   step='0.01'
                   min="0"
                   max="10000"
                   value={replenishCost}
                   onChange={e => setReplenishCost(e.target.value)}/>
            <br/>
            <label>Number in Stock:</label>
            <input type="number"
                   id="number in stock"
                   min="0"
                   max="10000"
                   value={numberInStock}
                   onChange={e => setNumberInStock(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Products"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<ProductSearchComponent/>