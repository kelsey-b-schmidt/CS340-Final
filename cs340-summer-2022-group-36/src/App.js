import React, { useState, useEffect } from 'react'
import './App.css'
import MainComponent from "./Components/MainComponent";

export default function App() {

	const [title, setTitle] = useState("title")
	const [text, setText] = useState("text")

	useEffect(() => {
	    const getResponse = async() => {
	        const response = await fetch("/api")
	        const responseJson = await response.json()
			setTitle(responseJson["title"])
			setText(responseJson["text"])
	    }
		    getResponse()
			.catch(console.error)

	}, [])


  
	return (
		<div className="App">
			<h1>{title}</h1>
			<h2>{text}</h2>
			<MainComponent
			title={title}
			text={text}
			/>
		</div>
	)
}

//<Deploy
// 			data={data}
// 			/>