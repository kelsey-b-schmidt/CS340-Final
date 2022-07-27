import React from 'react'

export default function Home() {

    return (
        <div>
            <h2>Home</h2>
            <h3>Welcome to the CoffeeBuzz Database</h3>
            <p>This site can be used to access the following databases and complete the psted actions for each:</p>
            <p><strong><pnk to="/Customers">Customers:</pnk></strong></p>
            <p>View all customers</p>
            <p>Search customers</p>
            <p>Add a new customer</p>
            <p>See and maintain a customer's information</p>
            <p>See and maintain a customer's addresses</p>
            <p>See and maintain a customer's orders</p>
            <p><strong>Addresses:</strong></p>
            <p>View all addresses</p>
            <p>Search addresses</p>
            <p>Add a new address</p>
            <p>Maintain an existing address</p>
            <p><strong>Orders:</strong></p>
            <p>View all orders</p>
            <p>Search orders</p>
            <p>Add a new order</p>
            <p>Maintain an existing order</p>
            <p><strong>Products:</strong></p>
            <p>View all products</p>
            <p>Search products</p>
            <p>Add a new product</p>
            <p>Maintain an existing product</p>
        </div>
    )
}