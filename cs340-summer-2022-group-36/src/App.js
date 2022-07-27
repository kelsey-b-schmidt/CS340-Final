import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import Products from "./Pages/Products";




export default function App() {

	return (
		<div>
			<BrowserRouter>
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Customers" element={<Customers/>}/>
					<Route path="/Products" element={<Products/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

