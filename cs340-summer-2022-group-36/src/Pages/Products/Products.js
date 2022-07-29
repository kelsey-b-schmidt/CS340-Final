import React from 'react'
import {Link} from "react-router-dom";
import ProductBrowseComponent from "../../Components/Products/ProductBrowseComponent";
//import ProductSearchComponent from "../Components/ProductSearchComponent";

export default function Products({setProductToEdit}) {

    return (
        <div>
            <h2>Products</h2>
            <Link to="/ProductsAdd"><button>Add a new Product</button></Link>
            <br/>
            <br/>
            <ProductBrowseComponent
                setProductToEdit={setProductToEdit}/>
        </div>
    )
}

//<ProductSearchComponent/>