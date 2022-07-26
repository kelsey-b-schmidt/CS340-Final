import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Customers from "./Pages/Customers";

export default function App() {

	return (
		<div className="App">
			<header>
				<h1>Kelsey and Andy's Project</h1>
			</header>
			<Router>
				<Routes>
					<Route path="/" element={<Customers/>}/>
				</Routes>
			</Router>
		</div>
	)
}
