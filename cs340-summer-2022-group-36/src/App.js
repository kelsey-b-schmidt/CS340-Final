import React, {useState} from 'react'
import './App.css'
import Customers from "./Pages/Customers";

export default function App() {

	const [customers, setCustomers] = useState([])

	return (
		<div className="App">
			<header>
				<h1>Kelsey and Andy's Project</h1>
			</header>
			<Customers
				customers={customers}
				setCustomers={setCustomers}/>
		</div>
	)
}
