import React from 'react'
import {useState} from 'react'

export default function SearchCustomersComponent (){

    const [query, setQuery] = useState("")
    const [lastSearch, setLastSearch] = useState("Testing")

    const handleSubmit = () => {
        const searchCustomers = async () => {
            const response = await fetch('/api/Customers', {
                method: 'POST',
                body: JSON.stringify({ query }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const responseJson = await response.json()
            setLastSearch(responseJson.request_received)
        }
        searchCustomers()
            .catch(console.error)
    }


    return (
        <div>
            <h3>Last search:</h3>
            <h3>{lastSearch}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="query"
                    placeholder="Search..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    required/>
                <input type="reset" onClick={() => setQuery("")}/>
                <input type="submit" />
            </form>
        </div>
    )
}





