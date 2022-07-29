import React from 'react'
import ProductRowComponent from "./ProductRowComponent";

export default function ProductTableComponent(
    {products}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th colSpan="2">Weight</th>
                <th>Sell Price</th>
                <th>Replenish Cost</th>
                <th>Number in Stock</th>
                <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) =>
                    <ProductRowComponent
                        product={product}

                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
