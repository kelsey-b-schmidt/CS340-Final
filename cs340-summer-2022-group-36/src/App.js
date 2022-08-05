import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";
import HeaderComponent from "./Components/Header-Footer/HeaderComponent";
import FooterComponent from "./Components/Header-Footer/FooterComponent";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers/Customers";
import Addresses from "./Pages/Addresses/Addresses";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import ProductsAdd from "./Pages/Products/ProductsAdd";
import ProductsUpdate from "./Pages/Products/ProductsUpdate";
import AddressesAdd from "./Pages/Addresses/AddressesAdd";
import AddressesUpdate from "./Pages/Addresses/AddressesUpdate";
import CustomersAdd from "./Pages/Customers/CustomersAdd";
import CustomersUpdate from "./Pages/Customers/CustomersUpdate";
import OrdersAdd from "./Pages/Orders/OrdersAdd";
import OrdersUpdate from "./Pages/Orders/OrdersUpdate";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import OrderDetailsAdd from "./Pages/OrderDetails/OrderDetailsAdd";
import OrderDetailsUpdate from "./Pages/OrderDetails/OrderDetailsUpdate";



export default function App() {

	const [productToEdit, setProductToEdit] = useState("");
	const [addressToEdit, setAddressToEdit] = useState("");
	const [customerToEdit, setCustomerToEdit] = useState("");
	const [orderToEdit, setOrderToEdit] = useState("");
	const [orderDetailToEdit, setOrderDetailToEdit] = useState("");
	const [products, setProducts] = useState([])
	const [addresses, setAddresses] = useState([])
	const [customers, setCustomers] = useState([])
	const [orders, setOrders] = useState([])
	const [orderDetails, setOrderDetails] = useState([])







	return (
		<div>
			<BrowserRouter>
				<HeaderComponent />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/Products" element={<Products
						products={products}
						setProducts={setProducts}
						setProductToEdit={setProductToEdit} />} />
					<Route path="/ProductsAdd" element={<ProductsAdd/>} />
					<Route path="/ProductsUpdate" element={<ProductsUpdate
						productToEdit={productToEdit}
					/>} />

					<Route path="/Addresses" element={<Addresses
						addresses={addresses}
						setAddresses={setAddresses}
						setAddressToEdit={setAddressToEdit} />} />
					<Route path="/AddressesAdd" element={<AddressesAdd
						customers={customers}
						setCustomers={setCustomers}
					/>} />
					<Route path="/AddressesUpdate" element={<AddressesUpdate
						addressToEdit={addressToEdit} />} />

					<Route path="/Customers" element={<Customers
						customers={customers}
						setCustomers={setCustomers}
						setCustomerToEdit={setCustomerToEdit} />} />
					<Route path="/CustomersAdd" element={<CustomersAdd/>} />
					<Route path="/CustomersUpdate" element={<CustomersUpdate
						customerToEdit={customerToEdit} />} />

					<Route path="/Orders" element={<Orders
						orders={orders}
						setOrders={setOrders}
						setOrderToEdit={setOrderToEdit} />} />
					<Route path="/OrdersAdd" element={<OrdersAdd
						addresses={addresses}
						setAddresses={setAddresses}
						customers={customers}
						setCustomers={setCustomers}/>} />
					<Route path="/OrdersUpdate" element={<OrdersUpdate
						orderToEdit={orderToEdit}
						addresses={addresses}
						setAddresses={setAddresses}/>} />



					<Route path="/OrderDetails" element={<OrderDetails
						orderDetails={orderDetails}
						setOrderDetails={setOrderDetails}
						setOrderDetailToEdit={setOrderDetailToEdit} />} />
					<Route path="/OrderDetailsAdd" element={<OrderDetailsAdd
						orders={orders}
						setOrders={setOrders}
						products={products}
						setProducts={setProducts}/>} />
					<Route path="/OrderDetailsUpdate" element={<OrderDetailsUpdate
						orderDetailToEdit={orderDetailToEdit} />} />
				</Routes>
				<FooterComponent />
			</BrowserRouter>
		</div>
	)
}

