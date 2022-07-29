import React from 'react'
import ProductTableComponent from "./ProductTableComponent";
import {useEffect, useState} from "react";

export default function ProductBrowseComponent() {

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
        <fieldset>
            <legend><strong>Browse Products</strong></legend>
            <ProductTableComponent
                products={products}
            />
        </fieldset>
    )
}