import React from 'react'
import ProductComponent from "./ProductComponent";

export default function ProductListComponent(
    {products}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
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
