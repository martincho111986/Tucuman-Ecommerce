import React from 'react';
import GalerySingleProduct from './GalerySingleProduct';
import ProductDescription from './ProductDescription';
import './singleProduct.css';

const SingleProduct = () => {
    return (
        <div className="single-product">
            <div className="left-side">
                <GalerySingleProduct />
            </div>
            <div className="right-side">
                <ProductDescription />
            </div>
        </div>
    )
}

export default SingleProduct
