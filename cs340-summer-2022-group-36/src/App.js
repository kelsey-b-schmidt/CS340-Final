import React from 'react'
import './App.css'
import Customers from "./Pages/Customers";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationComponent from "./Components/NavigationComponent";

export default function App() {

	return (
		<div className="App">
			<header>
				<h1>Kelsey and Andy's Project</h1>
			</header>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Customers" element={<Customers/>}/>
				</Routes>
			</Router>
		</div>
	)
}

//<a href="Customers">Customers</a>
// 			<Home/>
// 			<Customers
// 				customers={customers}
// 				setCustomers={setCustomers}/>