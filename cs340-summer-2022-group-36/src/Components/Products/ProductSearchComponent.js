import React from 'react'
import {useState} from 'react'

export default function ProductSearchComponent ({setProducts}){

    const [query, setQuery] = useState("")

    const handleSubmit = () => {
        if (query !== "") {
            const action = "Searchbar"
            const newProductSearch = async () => {
                const searchProductValues = {
                    action,
                    query
                }
                const response = await fetch('/api/Products', {
                    method: 'POST',
                    body: JSON.stringify(searchProductValues),
                    headers: { 'Content-Type': 'application/json' },
                })
                const responseJson = await response.json()
                setProducts(responseJson)
            }
            newProductSearch()  // the new data has already loaded into the component
                .catch(console.error)
        }
        else {
            alert("Please enter at least one search term!")
        }
    }

    return (
        <div>
            <input
                type="text"
                id="query"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={() => setQuery("")}>Reset</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}





