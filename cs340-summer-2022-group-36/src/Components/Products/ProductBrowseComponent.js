import React from 'react'
import ProductTableComponent from "./ProductTableComponent";

export default function ProductBrowseComponent( {products, setProductToEdit} ) {

    return (
        <fieldset>
            <legend><strong>Browse Products</strong></legend>
            <ProductTableComponent
                products={products}
                setProductToEdit={setProductToEdit}
            />
        </fieldset>
    )
}