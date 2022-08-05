import React from 'react'
import { useNavigate } from "react-router-dom";

export default function OrderRowComponent(
    { order, setOrderToEdit }) {

    const navigate = useNavigate()

    const orderID = order.orderID
    const addressID = order.addressID

    const onUpdate = () => {
        setOrderToEdit(order)
        navigate("/OrdersUpdate")
    }

    //const seeOrderDetails = () => {
//    navigate("/OrderDetails")
//

    const markShipped = () => {
        const markOrderShipped = async () => {
            const action = "Update"
            // YYYY-MM-DD hh:mm:ss
            const newDate = new Date()
            const shipDateTime = [newDate.getFullYear(),
                (newDate.getMonth()+1).toString().padStart(2, '0'),
                (newDate.getDate()).toString().padStart(2, '0')].join('-')+' '+
                [(newDate.getHours()).toString().padStart(2, '0'),
                (newDate.getMinutes()).toString().padStart(2, '0'),
                (newDate.getSeconds()).toString().padStart(2, '0')].join(':')

            const newOrderValues = {
                action, addressID, shipDateTime, orderID
            }
            const response = await fetch('/api/Orders', {
                method: 'POST',
                body: JSON.stringify(newOrderValues),
                headers: { 'Content-Type': 'application/json' },
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully marked the Order as shipped!\nThe page will now refresh.")
                window.location.reload(false)
            } else {
                alert("Failed to mark Order shipped, please try again!")
            }
        }
        const answer = window.confirm("This will mark the selected Order as shipped.\nDo you wish to proceed?")
        if (answer) {
            markOrderShipped()
                .catch(console.error)
        }
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
                window.location.reload(false)
            }
        }
        const answer = window.confirm("This will delete the selected Order.\nDo you wish to proceed?")
        if (answer) {
            deleteOrders()
                .catch(error => {
                    alert('This Order is in use with an Order Detail and cannot be deleted.')
                })
        }
    }

    const handleDateTime = (input) => {
        if (input === null) {
            return "Not shipped yet"
        }
        else {
            return input
        }
    }

    const updateAddressButton = (input) => {
        if (input === null) {
            return <input type="button" value="Change Address ID" onClick={onUpdate}/>
        }
        else {
            return <input type="button" value="Change Address ID" disabled/>
        }
    }


    const shipButton = (input) => {
        if (input === null) {
            return <input type="button" value="Mark Shipped" onClick={markShipped}/>
        }
        else {
            return <input type="button" value="Mark Shipped" disabled/>
        }
    }

    const deleteButton = (input) => {
        if (input === null) {
            return <input type="button" value="Delete" onClick={onDelete}/>
        }
        else {
            return <input type="button" value="Delete" disabled/>
        }
    }

    return (
        <tr>
            <td>{order.orderID}</td>
            <td>{order.customerID}</td>
            <td>{order.addressID}</td>
            <td>{handleDateTime(order.shipDateTime)}</td>
            <td>
                <input type="button" value="See Order Details"/>
            </td>
            <td>{updateAddressButton(order.shipDateTime)}</td>
            <td>{shipButton(order.shipDateTime)}</td>
            <td>{deleteButton(order.shipDateTime)}</td>
        </tr>
    )
}


