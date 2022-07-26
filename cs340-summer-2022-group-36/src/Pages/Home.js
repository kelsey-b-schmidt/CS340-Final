import React from 'react'

export default function Home() {

    return (
        <div>
            <h2>Home</h2>
            <h3>Welcome to the CoffeeBuzz Database</h3>
            <p>This site can be used to access the following databases and complete the listed actions for each:</p>
            <p><strong>Customers</strong></p>
            <ul>
                <li>View all customers</li>
                <li>Search customers</li>
                <li>Add a new customer</li>
                <li>See and maintain a customer's information</li>
                <li>See and maintain a customer's addresses</li>
                <li>See and maintain a customer's orders</li>
            </ul>
            <p><strong>Addresses</strong></p>
            <ul>
                <li>View all addresses</li>
                <li>Search addresses</li>
                <li>Add a new address</li>
                <li>Maintain an existing address</li>
            </ul>
            <p><strong>Orders</strong></p>
            <ul>
                <li>View all orders</li>
                <li>Search orders</li>
                <li>Add a new order</li>
                <li>Maintain an existing order</li>
            </ul>
            <p><strong>Products</strong></p>
            <ul>
                <li>View all products</li>
                <li>Search products</li>
                <li>Add a new product</li>
                <li>Maintain an existing product</li>
            </ul>
        </div>
    )
}