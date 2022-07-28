import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import Addresses from "./Pages/Addresses";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import FooterComponent from "./Components/FooterComponent";




export default function App() {

	return (
		<div>
			<BrowserRouter>
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Customers" element={<Customers/>}/>
					<Route path="/Addresses" element={<Addresses/>}/>
					<Route path="/Orders" element={<Orders/>}/>
					<Route path="/Products" element={<Products/>}/>
				</Routes>
				<FooterComponent/>
			</BrowserRouter>
		</div>
	)
}

