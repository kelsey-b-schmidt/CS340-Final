import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Customers from "./Pages/Customers";

export default function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Customers/>}/>
				</Routes>
			</Router>
		</div>
	)
}
