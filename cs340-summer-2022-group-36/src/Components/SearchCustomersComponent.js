import React from 'react'
import {useState} from 'react'

export default function SearchCustomersComponent ({setLastSearch}){

    const [query, setQuery] = useState("")

    const handleSubmit = () => {
        const searchCustomers = async () => {
            const newQuery = { query }
            const response = await fetch('/api/Customers', {
                method: 'POST',
                body: JSON.stringify(newQuery),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const responseJson = await response.json()
            setLastSearch(responseJson.search)
        }
        searchCustomers()
            .catch(console.error)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="query"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                required/>
            <input type="reset" />
            <input type="submit" />
        </form>
    )
}





