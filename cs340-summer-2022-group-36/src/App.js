import React from 'react'
import './App.css'
import Customers from "./Pages/Customers";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";

export default function App() {

	return (
		<div>
			<BrowserRouter>
				<h1>Andy and Kelsey's Project</h1>
				<HeaderComponent/>
			</BrowserRouter>
		</div>
	)
}

//<a href="Customers">Customers</a>
// 			<Home/>
// 			<Customers
// 				customers={customers}
// 				setCustomers={setCustomers}/>



//<Routes>
// 					<Route path="/" element={<Home/>}/>
// 					<Route path="/Customers" element={<Customers/>}/>
// 				</Routes>