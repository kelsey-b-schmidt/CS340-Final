import React from 'react'
import {Link} from "react-router-dom";

export default function Products() {


    return (
        <fieldset>
            <legend><strong>Insert Order</strong></legend>
            <label htmlFor="customer ID">Customer ID:</label>
            <br/>
            <select id="customer ID" name="customer ID">
                <option value="1">ID 1: Joann Coffeelover</option>
                <option value="2">ID 2: General Koffobi's</option>
                <option value="3">ID 3: Peet's Coffee</option>
                <option value="4">ID 4: Biggby Smith</option>
                <option value="5">ID 5: Anetta NameHere</option>
            </select>
            <br/>
            <label htmlFor="address ID">Address ID:</label>
            <select id="address ID" name="address ID">
                <option value="1">Customer Address 1</option>
                <option value="2">Customer Address 2</option>
            </select>
            <br/>
            <br/>
            <input type="button" value="Submit"
                   onClick='if(confirm("This will create an order\nfor the selected customer with the given values.\nAre you sure you want to submit?")) window.location.href="../Orders.html"'/>
            <input type="reset" id="insertOrder"/>
            <Link to="/Orders"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<ProductSearchComponent/>