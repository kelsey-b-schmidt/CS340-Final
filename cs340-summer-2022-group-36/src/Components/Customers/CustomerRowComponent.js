import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CustomerRowComponent(
    { customer, setCustomerToEdit }) {

    const navigate = useNavigate()

    const customerID = customer.customerID

    const onUpdate = () => {
        setCustomerToEdit(customer)
        navigate("/CustomersUpdate")
    }

    const onDelete = () => {
        const deleteCustomer = async () => {
            const action = "Delete"

            const newCustomerValues = {
                action, customerID
            }
            const response = await fetch('/api/Customers', {
                method: 'POST',
                body: JSON.stringify(newCustomerValues),
                headers: { 'Content-Type': 'application/json' },
            })
            const responseJson = await response.json()
            if (responseJson.request_received === "success") {
                alert("Successfully deleted the Customer!\nThe page will now refresh.")
                window.location.reload(false)
            } else {
                alert("Failed to delete Customer, please try again!")
            }
        }
        const answer = window.confirm("This will delete the selected Customer.\nDo you wish to proceed?")
        if (answer) {
            deleteCustomer()
                .catch(console.error)
        }
    }

    return (
        <tr>
            <td>{customer.customerID}</td>
            <td>{customer.customerName}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber}</td>
            <td>
                <input type="button" value="Update" onClick={onUpdate} />
            </td>
            <td>
            <input type="button" value="Delete"
                       onClick={onDelete}/>
            </td>
        </tr>
    )
}
