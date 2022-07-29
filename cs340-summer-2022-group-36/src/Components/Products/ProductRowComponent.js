import React from 'react'
import {useState} from "react";

export default function ProductRowComponent(
    {product}) {

    const productID = product.productID

    const [action, setAction] = useState("Delete")

    const handleSubmit = () => {
        const deleteProduct = async () => {
            const newProductValues = {
                action, productID
            }
            const response = await fetch('/api/Products', {
                method: 'POST',
                body: JSON.stringify(newProductValues),
                headers: {'Content-Type': 'application/json'},
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully deleted the Product!\nThe page will now refresh.")
                window.location.reload()
            } else {
                alert("Failed to delete Product, please try again!")
            }
        }
        const answer = window.confirm("This will delete the selected Product.\nDo You wish to proceed?")
        if (answer) {
            deleteProduct()
                .catch(console.error)
        }
    }

    return (
        <tr>
            <td>{product.productID}</td>
            <td>{product.productName}</td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.weightVal}</td>
            <td>{product.weightUnit}</td>
            <td>${product.sellPrice}</td>
            <td>${product.replenishCost}</td>
            <td>{product.numberInStock}</td>
            <td>
                <input type="button" value="Update"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick={handleSubmit}
                />
            </td>
        </tr>
    )
}
