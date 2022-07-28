import React from 'react'

export default function ProductComponent(
    {product}) {
    return (
        <tr>
            <td>{product.productID}</td>
            <td>{product.productName}</td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.weightVal}</td>
            <td>{product.weightUnit}</td>
            <td>{product.sellPrice}</td>
            <td>{product.replenishCost}</td>
            <td>{product.numberInStock}</td>
            <td>
                <input type="button" value="Update"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick='confirm("This will delete the selected product.\nAre you sure you want to submit?")'
                />
            </td>
            <td>
                <input type="button" value="See Addresses"/>
            </td>
            <td>
                <input type="button" value="See Orders"/>
            </td>
        </tr>
    )
}
