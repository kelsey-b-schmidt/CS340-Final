import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderRowComponent(
    { order, setOrderToEdit }) {

    const navigate = useNavigate()

    const orderID = order.orderID

    // const seeUpdateAddresses = () => {
    //     navigate("/AddressesUpdate")
    // }

    const seeOrderDetails = () => {
        navigate("/OrderDetails")
    }

    const onDelete = () => {
        const deleteOrders = async () => {
            const action = "Delete"

            const newOrderValues = {
                action, orderID
            }
            const response = await fetch('/api/Orders', {
                method: 'POST',
                body: JSON.stringify(newOrderValues),
                headers: { 'Content-Type': 'application/json' },
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully deleted the Order!\nThe page will now refresh.")
                window.location.reload()
            } else {
                alert("Failed to delete Order, please try again!")
            }
        }
        const answer = window.confirm("This will delete the selected Order.\nDo you wish to proceed?")
        if (answer) {
            deleteOrders()
                .catch(console.error)
        }
    }

    const setDate = () => {
        console.log('here')
        const newDate = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const combinedDateTime = `${newDate} ${time}`
        return combinedDateTime
    }

    const newDate = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const combinedDateTime = `${newDate} ${time}`

    const handleDateTime = (input) => {
        console.log(input)
        if (input === null) {
            return "Not shipped yet"
        }
        else {
            return input
        }
    }

    return (
        <tr>
            <td>{order.orderID}</td>
            <td>{order.customerID}</td>
            <td>{order.addressID}</td>
            <td>{handleDateTime(order.shipDateTime)}</td>
            <td>
                <input type="button" value="See Order Details" onClick={seeOrderDetails} />
            </td>
            <td>
                <input type="button" value="Update Address" />
            </td>
            <td>
                <input type="button" value="Mark Shipped" onClick={() => handleDateTime(combinedDateTime)} />
            </td>
            <td>
                <input type="button" value="Delete"
                    onClick={onDelete}
                />
            </td>
        </tr>
    )
}
{/* <input type="button" value="Update Address" onClick={seeUpdateAddresses}/> */} //have to figure out which customer ID it selects to update address