import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationComponent({link}) {

    const links= {Home: <Link to="/">Home</Link>,
        Customers: <Link to="/Customers">Customers</Link>,
        Addresses: <Link to="/Addresses">Addresses</Link>,
        Products: <Link to="/Products">Products</Link>,
        Orders: <Link to="/Orders">Orders</Link>,
        OrderDetails: <Link to="/OrderDetails">OrderDetails</Link>}

    if (link === "Home"){
        return (
            links.Home
        )}
    else if (link === "Customers"){
        return (
            links.Customers
        )}
    else if (link === "Addresses"){
        return (
            links.Addresses
        )}
    else if (link === "Products"){
        return (
            links.Products
        )}
    else if (link === "Orders"){
        return (
            links.Orders
        )}
    else if (link === "OrderDetails"){
        return (
            links.OrderDetails
        )}
}