import React from 'react'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Products({productToEdit}) {


    const navigate = useNavigate()

    const [productNameUpdate, setProductNameUpdate] = useState(productToEdit.productName)
    const [descriptionUpdate, setDescriptionUpdate] = useState(productToEdit.description)
    const [brandUpdate, setBrandUpdate] = useState(productToEdit.brand)
    const [weightValUpdate, setWeightValUpdate] = useState(productToEdit.weightVal)
    const [weightUnitUpdate, setWeightUnitUpdate] = useState(productToEdit.weightUnit)
    const [sellPriceUpdate, setSellPriceUpdate] = useState(productToEdit.sellPrice)
    const [replenishCostUpdate, setReplenishCostUpdate] = useState(productToEdit.replenishCost)
    const [numberInStockUpdate, setNumberInStockUpdate] = useState(productToEdit.numberInStock)

    const handleReset = () => {
        setProductNameUpdate(productToEdit.productName)
        setDescriptionUpdate(productToEdit.description)
        setBrandUpdate(productToEdit.brand)
        setWeightValUpdate(productToEdit.weightVal)
        setWeightUnitUpdate(productToEdit.weightUnit)
        setSellPriceUpdate(productToEdit.sellPrice)
        setReplenishCostUpdate(productToEdit.replenishCost)
        setNumberInStockUpdate(productToEdit.numberInStock)
    }

    const handleSubmit = () => {
        if (productNameUpdate === '' || descriptionUpdate === ''|| brandUpdate === ''
            || weightValUpdate === ''|| weightUnitUpdate=== ''|| sellPriceUpdate === ''
            || replenishCostUpdate === ''|| numberInStockUpdate === '') {
            alert("Error: Missing fields. Please enter all values.")
        }
        else if (weightValUpdate < 0 || sellPriceUpdate < 0 || replenishCostUpdate < 0 || numberInStockUpdate < 0) {
            alert("Error: Numeric values cannot be less than 0. Please enter new values.")
        }
        else if (weightValUpdate > 10000 || sellPriceUpdate > 10000 || replenishCostUpdate > 10000 || numberInStockUpdate > 10000) {
            alert("Error: Numeric values cannot be more than than 10,000. Please enter new values.")
        }
        else {
            const action = "Update"
            const productID = productToEdit.productID
            const newProduct = async () => {
                const newProductValues = {
                    action,
                    productNameUpdate,
                    descriptionUpdate,
                    brandUpdate,
                    weightValUpdate,
                    weightUnitUpdate,
                    sellPriceUpdate,
                    replenishCostUpdate,
                    numberInStockUpdate,
                    productID
                }
                const response = await fetch('/api/Products', {
                    method: 'POST',
                    body: JSON.stringify(newProductValues),
                    headers: {'Content-Type': 'application/json'},
                })
                const responseJson = await response.json()
                if (responseJson.request_received === "success") {
                    alert("Successfully updated the Product!\nYou will now be redirected to the Products Page.")
                    navigate("/Products")
                } else {
                    alert("Failed to update Product, please check the input and try again!")
                }
            }
            const answer = window.confirm("This will update this Product with the entered values.\nDo you wish to proceed?")
            if (answer) {
                newProduct()    // the new data has already loaded into the component
                    .catch(console.error)
            }
        }
    }

    return (
        <fieldset class="form">
            <legend><strong>Update Product</strong></legend>
            <label>Product ID:</label>
                <input type="text"
                       id="productID"
                       value={productToEdit.productID} disabled/>
            <label>Product Name:</label>
                <input type="text"
                       id="productName"
                       maxLength="100"
                       value={productNameUpdate}
                       onChange={e => setProductNameUpdate(e.target.value)}/>
            <label>Description:</label>
                <input type="text"
                       id="description"
                       maxLength="1000"
                       value={descriptionUpdate}
                       onChange={e => setDescriptionUpdate(e.target.value)}/>
            <label>Brand:</label>
                <input type="text"
                       id="brand"
                       maxLength="100"
                       value={brandUpdate}
                       onChange={e => setBrandUpdate(e.target.value)}/>
            <label>Weight Value:</label>
                <br/>
                <input type="number"
                       id="weightVal"
                       title="The numeric weight of an item, example: 100. The unit is selected in the next box (lbs or oz)."
                       step='0.01'
                       min="0"
                       max="10000"
                       value={weightValUpdate}
                       onChange={e => setWeightValUpdate(e.target.value)}/>
                <br/>
            <label>Weight Unit:</label>
                <br/>
                <select id="weightUnit" onChange={e => setWeightUnitUpdate(e.target.value)}>
                    <option value={weightUnitUpdate} selected disabled hidden>{weightUnitUpdate}</option>
                    <option value="lbs">lbs</option>
                    <option value="oz">oz</option>
                </select>
                <br/>
            <label>Sell Price:</label>
                <br/>
                <span>$ </span>
                <input type="number"
                       id="sellPrice"
                       title="What the customer pays for the product"
                       step='0.01'
                       min="0"
                       max="10000"
                       value={sellPriceUpdate}
                       onChange={e => setSellPriceUpdate(e.target.value)}/>
                <br/>
            <label>Replenish Cost:</label>
                <br/>
                <span>$ </span>
                <input type="number"
                       id="replenish cost"
                       title="How much it costs CoffeeBuzz to purchase the item from the manufacturer"
                       step='0.01'
                       min="0"
                       max="10000"
                       value={replenishCostUpdate}
                       onChange={e => setReplenishCostUpdate(e.target.value)}/>
                <br/>
            <label>Number in Stock:</label>
                <input type="number"
                       id="number in stock"
                       min="0"
                       max="10000"
                       value={numberInStockUpdate}
                       onChange={e => setNumberInStockUpdate(e.target.value)}/>
                <br/>
                <br/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
            <Link to="/Products"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<ProductSearchComponent/>