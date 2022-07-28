import React from 'react'

export default function ProductComponent(
    {product}) {
    return (
        <tr>
            <td>{product.productID}</td>
            <td>{product.productName}</td>
            <td>{product.email}</td>
            <td>{product.phoneNumber}</td>
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
