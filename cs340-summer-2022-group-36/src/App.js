import React from 'react'
import './App.css'
import Customers from "./Pages/Customers";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";

export default function App() {

	return (
		<div>
			<HeaderComponent/>
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