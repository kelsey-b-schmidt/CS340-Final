import React from 'react'
import { Link } from "react-router-dom";
import OrderBrowseComponent from "../../Components/Orders/OrderBrowseComponent";
//import OrderSearchComponent from "../Components/OrderSearchComponent";

export default function Orders({ setOrderToEdit }) {

    return (
        <div>
            <h2>Orders</h2>
            <Link to="/OrdersAdd"><button>Add a new Order</button></Link>
            <br />
            <br />
            <OrderBrowseComponent
                setOrderToEdit={setOrderToEdit} />
        </div>
    )
}

//<OrderSearchComponent/>
