import React from 'react'

export default function ProductIDDynamicSelectAddOptionComponent(
    { product }) {

    return (
    <option value={product.productID}>Product ID: {product.productID} - Brand: {product.brand} - Product Name: {product.productName}</option>
    )
}
