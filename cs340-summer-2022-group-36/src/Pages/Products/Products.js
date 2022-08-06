import React from 'react'
import {Link} from "react-router-dom";
import ProductBrowseComponent from "../../Components/Products/ProductBrowseComponent";
import {useEffect} from "react";
import ProductSearchComponent from "../../Components/Products/ProductSearchComponent";

export default function Products({products, setProducts, setProductToEdit}) {

    useEffect(() => {
        const getProducts = async() => {
            const response = await fetch("/api/Products")
            const responseJson = await response.json()
            setProducts(responseJson)
        }
        getProducts()
            .catch(console.error)
    }, [])

    const reloadTable = () => {
        window.location.reload(false)
    }

    return (
        <div>
            <h2>Products</h2>
            <Link to="/ProductsAdd"><button>Add a new Product</button></Link>
            <br/>
            <br/>
            <button onClick={reloadTable}>Reload all Products</button>
            <br/>
            <br/>
            <ProductSearchComponent setProducts={setProducts}/>
            <br/>
            <ProductBrowseComponent
                products={products}
                setProductToEdit={setProductToEdit}
            />
        </div>
    )
}

//<ProductSearchComponent setProducts={setProducts}/>