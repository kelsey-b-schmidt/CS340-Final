import React, { useState, useEffect } from 'react'
import './App.css'
import Deploy from './Components/Deploy'

export default function App() {

	const [data, setData] = useState({})

	useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api")
            const responseJson = await response.json()
			setData(responseJson["text"])
        }
        getResponse()
			.catch(console.error)

    }, [])


  
	return (
		<div className="App">
			<h1>Hello?</h1>
		</div>
	)
}

//<Deploy
// 			data={data}
// 			/>