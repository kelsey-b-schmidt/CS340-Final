import React from 'react'
import ProductComponent from "./ProductComponent";

export default function ProductListComponent(
    {products}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Product ID</th>
<<<<<<< HEAD
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th colSpan="4">Actions</th>
=======
                <th>Product Name</th>
                <th>Description</th>
                <th>Brand</th>
                <th colSpan="2">Weight</th>
                <th>Sell Price</th>
                <th>Replenish Cost</th>
                <th>Number in Stock</th>
                <th colSpan="2">Actions</th>
>>>>>>> 69f2b6572c88750d3825f2a26293a550509b2ed1
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
