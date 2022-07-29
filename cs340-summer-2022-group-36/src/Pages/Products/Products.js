import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import ProductBrowseComponent from "../../Components/Products/ProductBrowseComponent";
//import ProductSearchComponent from "../Components/ProductSearchComponent";

export default function Products({setProductToEdit, action, setAction}) {
    const navigate = useNavigate()

    const onAdd = () => {
        navigate("/ProductsAdd")
    }

    return (
        <div>
            <h2>Products</h2>
            <button onclick={onAdd}>Add a new Product</button>
            <br/>
            <br/>
            <ProductBrowseComponent
                action={action}
                setAction={setAction}
                setProductToEdit={setProductToEdit}/>
        </div>
    )
}

//<ProductSearchComponent/>