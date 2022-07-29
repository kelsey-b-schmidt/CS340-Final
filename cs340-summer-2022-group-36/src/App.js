import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderComponent from "./Components/Header-Footer/HeaderComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers/Customers";
import CustomersAdd from "./Pages/Customers/CustomersAdd";
import Addresses from "./Pages/Addresses/Addresses";
import AddressesAdd from "./Pages/Addresses/AddressesAdd";
import Orders from "./Pages/Orders/Orders";
import OrdersAdd from "./Pages/Orders/OrdersAdd";
import Products from "./Pages/Products/Products";
import ProductsAdd from "./Pages/Products/ProductsAdd";
import FooterComponent from "./Components/Header-Footer/FooterComponent";




export default function App() {

	return (
		<div>
			<BrowserRouter>
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Customers" element={<Customers/>}/>
					<Route path="/CustomersAdd" element={<CustomersAdd/>}/>
					<Route path="/Addresses" element={<Addresses/>}/>
					<Route path="/AddressesAdd" element={<AddressesAdd/>}/>
					<Route path="/Orders" element={<Orders/>}/>
					<Route path="/OrdersAdd" element={<OrdersAdd/>}/>
					<Route path="/Products" element={<Products/>}/>
					<Route path="/ProductsAdd" element={<ProductsAdd/>}/>
				</Routes>
				<FooterComponent/>
			</BrowserRouter>
		</div>
	)
}

