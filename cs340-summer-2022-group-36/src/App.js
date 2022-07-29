import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import HeaderComponent from "./Components/Header-Footer/HeaderComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers/Customers";
import Addresses from "./Pages/Addresses/Addresses";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import ProductsAdd from "./Pages/Products/ProductsAdd";
import ProductsUpdate from "./Pages/Products/ProductsUpdate";
import FooterComponent from "./Components/Header-Footer/FooterComponent";




export default function App() {

	const [productToEdit, setProductToEdit] = useState();
	const [action, setAction] = useState('')

	return (
		<div>
			<BrowserRouter>
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Customers" element={<Customers/>}/>
					<Route path="/Addresses" element={<Addresses/>}/>
					<Route path="/Orders" element={<Orders/>}/>
					<Route path="/Products" element={<Products
						productToEdit={productToEdit}
						setProductToEdit={setProductToEdit}
						action={action}
						setAction={setAction}/>}/>
					<Route path="/ProductsAdd" element={<ProductsAdd
						action={action}
						setAction={setAction}/>}/>
					<Route path="/ProductsUpdate" element={<ProductsUpdate
						productToEdit={productToEdit}
						action={action}/>}/>
				</Routes>
				<FooterComponent/>
			</BrowserRouter>
		</div>
	)
}

