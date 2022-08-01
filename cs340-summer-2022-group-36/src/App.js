import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "./Components/Header-Footer/HeaderComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers/Customers";
import Addresses from "./Pages/Addresses/Addresses";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import ProductsAdd from "./Pages/Products/ProductsAdd";
import ProductsUpdate from "./Pages/Products/ProductsUpdate";
import FooterComponent from "./Components/Header-Footer/FooterComponent";
import AddressesAdd from "./Pages/Addresses/AddressesAdd";
import AddressesUpdate from "./Pages/Addresses/AddressesUpdate";
import CustomersAdd from "./Pages/Customers/CustomersAdd";
import CustomersUpdate from "./Pages/Customers/CustomersUpdate";
import OrdersAdd from "./Pages/Orders/OrdersAdd";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import OrderDetailsAdd from "./Pages/OrderDetails/OrderDetailsAdd";
import OrderDetailsUpdate from "./Pages/OrderDetails/OrderDetailsUpdate";


export default function App() {

	const [productToEdit, setProductToEdit] = useState();
	const [addressToEdit, setAddressToEdit] = useState();
	const [customerToEdit, setCustomerToEdit] = useState();
	const [orderToEdit, setOrderToEdit] = useState();
	const [orderDetailsToEdit, setOrderDetailsToEdit] = useState();

	return (
		<div>
			<BrowserRouter>
				<HeaderComponent />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Customers" element={<Customers
						customerToEdit={customerToEdit}
						setCustomerToEdit={setCustomerToEdit} />} />
					<Route path="/CustomersAdd" element={<CustomersAdd />} />
					<Route path="/CustomersUpdate" element={<CustomersUpdate
						customerToEdit={customerToEdit} />} />
					<Route path="/Addresses" element={<Addresses
						addressToEdit={addressToEdit}
						setAddressToEdit={setAddressToEdit} />} />
					<Route path="/AddressesAdd" element={<AddressesAdd />} />
					<Route path="/AddressesUpdate" element={<AddressesUpdate
						addressToEdit={addressToEdit} />} />
					<Route path="/Orders" element={<Orders
						orderToEdit={orderToEdit}
						setOrderToEdit={setOrderToEdit} />} />
					<Route path="/OrdersAdd" element={<OrdersAdd />} />
					<Route path="/Products" element={<Products
						productToEdit={productToEdit}
						setProductToEdit={setProductToEdit} />} />
					<Route path="/ProductsAdd" element={<ProductsAdd />} />
					<Route path="/ProductsUpdate" element={<ProductsUpdate
						productToEdit={productToEdit} />} />
					<Route path="/OrderDetails" element={<OrderDetails
						orderDetailsToEdit={orderDetailsToEdit}
						setOrderDetailsToEdit={setOrderDetailsToEdit} />} />
					<Route path="/OrderDetailsAdd" element={<OrderDetailsAdd />} />
					<Route path="/OrderDetailsUpdate" element={<OrderDetailsUpdate
						orderDetailsToEdit={orderDetailsToEdit} />} />
				</Routes>
				<FooterComponent />
			</BrowserRouter>
		</div>
	)
}

