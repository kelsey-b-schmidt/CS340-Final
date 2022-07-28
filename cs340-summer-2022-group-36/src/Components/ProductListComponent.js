import React from 'react'
import ProductComponent from "./ProductComponent";

export default function ProductListComponent(
    {products}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th>Weight</th>
                <th>Sell Price</th>
                <th>Replenish Cost</th>
                <th>Number In Stock</th>
                <th colSpan="4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) =>
                    <ProductComponent
                        product={product}
                        key={i}
                    />)}
            </tbody>
        </table>
    )
}
