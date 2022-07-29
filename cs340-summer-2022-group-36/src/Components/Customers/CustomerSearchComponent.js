import React from 'react'
import {useState} from 'react'

export default function CustomerSearchComponent (){

    const [query, setQuery] = useState("")
    const [lastSearch, setLastSearch] = useState("Testing")

    const handleSubmit = () => {
        const searchCustomers = async () => {
            const response = await fetch('/api/Customers', {
                method: 'POST',
                body: JSON.stringify({a: 1, b: 'Text'}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const responseJson = await response.json()
            setLastSearch(responseJson.request_received)
            setQuery("")
        }
        searchCustomers()
            .catch(console.error)
    }


    return (
        <div><h3>Query:</h3>
            <h3>{query}</h3>
            <h3>Last search:</h3>
            <h3>{lastSearch}</h3>
            <input
                type="text"
                id="query"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                required/>
            <button onClick={() => setQuery("")}>Reset</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}





