import React from 'react'

export default function OrderRowComponent(
    {order}) {

    const handleDateTime = (input) => {
        if(input === null) {
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
                <input type="button" value="See Order Details"/>
            </td>
            <td>
                <input type="button" value="Update Address"/>
            </td>
            <td>
                <input type="button" value="Mark Shipped"/>
            </td>
            <td>
                <input type="button" value="Delete"
                       onClick='confirm("This will delete the selected order.\nAre you sure you want to submit?")'
                />
            </td>
        </tr>
    )
}
