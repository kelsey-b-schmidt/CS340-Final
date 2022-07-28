import React from 'react'
import {useState, useEffect } from 'react'
import ProductListComponent from "../Components/ProductListComponent";
import ProductSearchComponent from "../Components/ProductSearchComponent";

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api/Products")
            const responseJson = await response.json()
            setProducts(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h2>Products</h2>
            <div class="table">
                <fieldset>
                    <legend><strong>Browse Products</strong></legend>
                    <ProductListComponent
                        products={products}
                    />
                </fieldset>
            </div>
            <br/>
            <input type="button" value="Add New Product"/>
            <br/>
            <br/>
        </div>
    )
}

//<ProductSearchComponent/>