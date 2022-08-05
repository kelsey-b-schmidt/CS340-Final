import React from 'react'
import ProductIDDynamicSelectAddOptionComponent from "./ProductIDDynamicSelectAddOptionComponent";

export default function ProductIDDynamicSelectAddComponent(
    {products, productID, setProductID}) {

    return (
        <select id="productID" value={productID} onChange={e => setProductID(e.target.value)}>
            <option value="" selected disabled hidden>Select</option>
            {products.map((product, i) =>
                <ProductIDDynamicSelectAddOptionComponent
                    product={product}
                    key={i}
                />)}
        </select>
    )
}
