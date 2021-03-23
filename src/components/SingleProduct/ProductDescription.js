import React from 'react'
import './singleProduct.css';
import {talleZapatillas} from './options.json'




const ProductDescription = () => {
    console.log(talleZapatillas)
 

    return (
        <div className="single-product__container">
            <h1 className="single-product__title">Adidas Super Star</h1>
            <div className="short-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita ex quam, nulla assumenda voluptatem.</p>
            </div>
                <h2>Selecciona tu Talle y el color</h2>
            <div className="single-product__choose">
                <select className="select-talle">
                    <option value=""> Elegi tu talle</option>
                    {talleZapatillas.map(talle => (
                        <option key={talle} value={talle}>{talle}</option>
                    ))}
                </select>
                <select className="select-color">
                <option value=""> Elegi el Color</option>
                    
                </select>
            </div>
        </div>
    )
}

export default ProductDescription
