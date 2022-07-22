import React, { useState, useEffect } from 'react'
import './App.css'
//import Deploy from './Components/Deploy'

export default function App() {

	const [json, setJson] = useState("data")
	const [data, setData] = useState("data")
	const [test, setTest] = useState("test")

	useEffect(() => {
	    const getResponse = async() => {
	        const response = await fetch("/api")
	        const responseJson = await response.json()
			setJson(responseJson["tutorial"])
			setData("data")
			setTest("testing")
	    }
		    getResponse()
			.catch(console.error)

	  }, [])


  
	return (
		<div className="App">
			<h1>Hello?</h1>
			<h2>{data}</h2>
			<h2>{test}</h2>
			<h2>{json}</h2>
		</div>
	)
}

//<Deploy
// 			data={data}
// 			/>