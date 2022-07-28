import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ProductComponent from '../Components/ProductComponent';

export const UpdateProductsPage = ({updatedProducts}) => {

    const [productName, setProductName] = useState(updatedProducts.productName);
    const [description, setDescription] = useState(updatedProducts.description);
    const [brand, setBrand] = useState(updatedProducts.brand);
    const [weightVal, setWightVal] = useState(updatedProducts.weightVal);
    const [weightUnit, setWeightUnit] = useState(updatedProducts.weightUnit);
    const [sellPrice, setSellPrice] = useState(updatedProducts.sellPrice);
    const [replenishCost, setReplenishCost] = useState(updatedProducts.replenishCost);
    const [numberInStock, setNumberInStock] = useState(updatedProducts.numberInStock);

    const history = useHistory();

    const updateProducts = async () => {
        const updatedProducts = {
            productName,
            description,
            brand,
            weightVal,
            weightUnit,
            sellPrice,
            replenishCost,
            numberInStock
        };
        const response = await fetch(`/ProductsUpdate/${updatedProducts._id}`, {
            method: 'PUT',
            body: JSON.stringify(updateProducts),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert('Successfully updated the products');
        } else {
            alert('Failed to update product. Please try again.')
        };
        history.push('/');
    };

    return (
        <div>
            <header>
                <h1>Update Products</h1>
                <ProductComponent></ProductComponent>
            </header>
            <input
                type="text"
                value={productName}
                onChange={e => setProductName(e.target.value)} />
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)} />
            <input
                type="text"
                value={brand}
                onChange={e => setBrand(e.target.value)} />
            <input
                type="number"
                value={weightVal}
                onChange={e => setWightVal(e.target.value)} />
            <select value={weightUnit} onChange={e => setWeightUnit(e.target.value)}>
                <option value={"kgs"}>kgs</option>
                <option value={"lbs"}>lbs</option>
            </select>
            <input
                type="number"
                value={sellPrice}
                onChange={e => setSellPrice(e.target.value)} />
            <input
                type="number"
                value={replenishCost}
                onChange={e => setReplenishCost(e.target.value)} />
            <input
                type="number"
                value={numberInStock}
                onChange={e => setNumberInStock(e.target.value)} />
            <button class="save-button"
                onClick={updatedProducts}
            >Save</button>
        </div>
    );
}

export default UpdateProductsPage;