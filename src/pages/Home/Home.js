import React from 'react'
import Banner from '../../components/Banner/Banner'
import ImageSilder from '../../components/Slider/ImageSilder'
import'./home.css'
import Productos from '../../components/Productos'

const Home = () => {
    return (
        <>
            <Banner />
            <div className="container mt-5 carousel">
                <h1 className="slider_title">Elegi que comprar</h1>
                <ImageSilder />
            </div>
            <Productos />
        </>
    )
}

export default Home
