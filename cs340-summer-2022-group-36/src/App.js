import React from 'react'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";

export default function App() {

	return (
		<div>
			<Router>
				<h1>Kelsey and Andy's Project</h1>
				<HeaderComponent/>
			</Router>
		</div>
	)
}

//<a href="Customers">Customers</a>
// 			<Home/>
// 			<Customers
// 				customers={customers}
// 				setCustomers={setCustomers}/>