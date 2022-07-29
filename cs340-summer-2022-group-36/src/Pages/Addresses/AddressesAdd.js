import React from 'react'
import {Link} from "react-router-dom";

export default function Products() {


    return (
        <fieldset>
            <legend><strong>Insert Address</strong></legend>
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
            <label htmlFor="recipient">Recipient:</label>
            <br/>
            <input type="text" id="recipient" name="recipient" maxLength="100"/>
            <br/>
            <label htmlFor="street">Street:</label>
            <br/>
            <input type="text" id="street" name="street" maxLength="100"/>
            <br/>
            <label htmlFor="city">City:</label>
            <br/>
            <input type="text" id="city" name="city" maxLength="100"/>
            <br/>
            <label htmlFor="state">State:</label>
            <br/>
            <input type="text" id="state" name="state" maxLength="100"/>
            <br/>
            <label htmlFor="zip">Zip:</label>
            <br/>
            <input type="text" id="zip" name="zip" maxLength="10"/>
            <br/>
            <label htmlFor="active">Active:</label>
            <br/>
            <input type="checkbox" id="active" name="active" checked/>
            <br/>
            <label htmlFor="primary">Primary:</label>
            <br/>
            <input type="checkbox" id="primary" name="primary"/>
            <br/>
            <br/>
            <input type="button" value="Submit"
                   onClick='if(confirm("This will add a new address\nfor the selected customer with the given values.\nAre you sure you want to submit?")) window.location.href="../Addresses.html"'/>
            <input type="reset" id="insertAddress"/>
            <Link to="/Addresses"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<ProductSearchComponent/>