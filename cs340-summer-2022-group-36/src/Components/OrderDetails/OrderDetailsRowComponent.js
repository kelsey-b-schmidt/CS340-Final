import React from 'react'
import { useNavigate } from "react-router-dom";

export default function OrderDetailsRowComponent(
    { orderDetails, setOrderDetailToEdit }) {

    const navigate = useNavigate()

    const odID = orderDetails.odID

    const onUpdate = () => {
        setOrderDetailToEdit(orderDetails)
        navigate("/OrderDetailsUpdate")
    }

    const onDelete = () => {
        const deleteOrderDetails = async () => {
            const action = "Delete"

            const newOrderDetailValues = {
                action, odID
            }
            const response = await fetch('/api/OrderDetails', {
                method: 'POST',
                body: JSON.stringify(newOrderDetailValues),
                headers: { 'Content-Type': 'application/json' },
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully deleted the OrderDetail!\nThe page will now refresh.")
                window.location.reload(false)
            }
        }
        const answer = window.confirm("This will delete the selected OrderDetail.\nDo you wish to proceed?")
        if (answer) {
            deleteOrderDetails()
                .catch(error => {
                    alert('Failed to delete Order Detail, please check the input and try again!')
                })
        }
    }

    return (
        <tr>
            <td>{orderDetails.odID}</td>
            <td>{orderDetails.orderID}</td>
            <td>{orderDetails.productID}</td>
            <td>{orderDetails.productQuantity}</td>
            <td>${orderDetails.unitPrice}</td>
            <td>${orderDetails.lineTotal}</td>
            <td>
                <input type="button" value="Update Order Details" onClick={onUpdate}/>
            </td>
            <td>
                <input type="button" value="Delete" onClick={onDelete}
                />
            </td>
        </tr>
    )
}
