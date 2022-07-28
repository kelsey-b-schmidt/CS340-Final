import React from 'react'
import {useState, useEffect } from 'react'
import ProductListComponent from "../Components/ProductListComponent";
import ProductSearchComponent from "../Components/ProductSearchComponent";
import { useHistory } from 'react-router-dom';

export default function Products({setUpdateProducts}) {

    const [products, setProducts] = useState([])
    const history = useHistory();

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("/api/Products")
            const responseJson = await response.json()
            setProducts(responseJson)
        }
        getResponse()
            .catch(console.error)
    }, [])

    // const updateProduct = products => {
    //     setUpdateProducts(products);
    //     history.push('/ProductsUpdate')
    // };

    return (
        <div>
            <h2>Products</h2>
            <div class="table">
                <fieldset>
                    <legend><strong>Browse Products</strong></legend>
                    <ProductListComponent
                        products={products} updateProduct={updateProduct}
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