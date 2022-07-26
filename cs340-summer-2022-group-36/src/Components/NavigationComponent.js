import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({link}) {
    const links= {Customers: <Link to="/Customers"> Customers</Link>}

    if (link === "Customers"){
        return (
            links.Customers
        )}
}
