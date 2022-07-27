import React from 'react'

export default function ProductComponent(
    {product}) {
<<<<<<< HEAD
=======

>>>>>>> 69f2b6572c88750d3825f2a26293a550509b2ed1
    return (
        <tr>
            <td>{product.productID}</td>
            <td>{product.productName}</td>
<<<<<<< HEAD
            <td>{product.email}</td>
            <td>{product.phoneNumber}</td>
=======
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.weightVal}</td>
            <td>{product.weightUnit}</td>
            <td>{product.sellPrice}</td>
            <td>{product.replenishCost}</td>
            <td>{product.numberInStock}</td>
>>>>>>> 69f2b6572c88750d3825f2a26293a550509b2ed1
            <td>
                <input type="button" value="Update"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick='confirm("This will delete the selected product.\nAre you sure you want to submit?")'
                />
            </td>
<<<<<<< HEAD
            <td>
                <input type="button" value="See Addresses"/>
            </td>
            <td>
                <input type="button" value="See Orders"/>
            </td>
=======
>>>>>>> 69f2b6572c88750d3825f2a26293a550509b2ed1
        </tr>
    )
}
