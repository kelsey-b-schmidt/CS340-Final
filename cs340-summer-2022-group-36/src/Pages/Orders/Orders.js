import React from 'react'
//import {Link} from "react-router-dom";
import OrderBrowseComponent from "../../Components/Orders/OrderBrowseComponent";
//import OrderSearchComponent from "../Components/OrderSearchComponent";

export default function Orders() {

    return (
        <div>
            <h2>Orders</h2>
            <button>Add a new Order</button>
            <br/>
            <br/>
            <OrderBrowseComponent/>
        </div>
    )
}

//<OrderSearchComponent/>
//<Link to="/OrdersAdd"><button>Add a new Order</button></Link> (link in button, when finished)