import React from 'react'
import {Link} from "react-router-dom";
import OrderDetailsBrowseComponent from "../../Components/OrderDetails/OrderDetailsBrowseComponent";

export default function OrderDetails({setOrderDetailsToEdit}) {

    return (
        <div>
            <h2>OrderDetails</h2>
            <Link to="/OrderDetailsAdd"><button>Add Order Detail</button></Link>
            <br/>
            <br/>
            <OrderDetailsBrowseComponent
                setOrderDetailsToEdit={setOrderDetailsToEdit}/>
        </div>
    )
}
