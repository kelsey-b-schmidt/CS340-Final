import React from 'react'
import {useState} from 'react'

export default function AddressSearchComponent (){

    const [query, setQuery] = useState("")

    const handleSubmit = () => {
        const searchAddresses = async () => {
            const response = await fetch('/api/Addresses', {
                method: 'POST',
                body: JSON.stringify({a: 1, b: 'Text'}),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const responseJson = await response.json()
            setQuery("")
        }
        searchAddresses()
            .catch(console.error)
    }


    return (
        <div>
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





