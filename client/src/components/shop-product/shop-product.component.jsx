import React from 'react'
import ProductGridList from '../product-grid-list/product-grid-list.component';

const ShopProduct = ({products}) => {
    return(
        <div className="shop-bottom-area mt-3">
            <div className="row">
                <ProductGridList product={products} /> 
            </div>
        </div>
    )
}

export default ShopProduct;