import React from 'react'
import {Link} from "react-router-dom";

export default function Products() {


    return (
        <fieldset>
            <legend><strong>Insert Customer</strong></legend>
            <label htmlFor="name">Name:</label>
            <br/>
            <input type="text" id="name" name="name" maxLength="100"/>
            <br/>
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="email" id="email" name="email" maxLength="100"/>
            <br/>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <br/>
            <input type="tel" id="phoneNumber" name="phoneNumber" maxLength="13"/>
            <br/>
            <br/>
            <input type="button" value="Submit"
                   onClick='if(confirm("This will insert a new customer with the given values.\nAre you sure you want to submit?")) window.location.href="../Customers.html"'/>
            <input type="reset" id="insertCustomer"/>
            <Link to="/Customers"><button>Cancel</button></Link>
        </fieldset>
    )
}

//<ProductSearchComponent/>