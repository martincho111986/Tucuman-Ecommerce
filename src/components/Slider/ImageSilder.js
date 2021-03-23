import React, { useState } from "react";
import './imageSilder.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ImageSilder = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Zapatillas",
      image:
        "https://www.ecestaticos.com/image/clipping/1eb88d6fa2bacd61182bb24277a46039/tenemos-los-modelos-mas-in-de-zapatillas-deportivas-de-nike-reebok-adidas-y-puma-con-un-30-de-descuento.jpg",
    },
    {
      id: 2,
      title: "Ropa",
      image:
        "https://ep01.epimg.net/elpais/imagenes/2015/12/28/buenavida/1451295238_829386_1537364054_noticia_normal.jpg",
    },
    {
      id: 3,
      title: "Outlet",
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/b3b89eb28a574da4959ba59900ebb1e5_9366/zapatillas-stan-smith-unisex.jpg",
    },
    {
      id: 4,
      title: "Accesorios",
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/abb94cce06514ce79856aa2a0121e2be_9366/medias-acolchadas-3-pares.jpg",
    },
    {
      id: 5,
      title: "Pantalones",
      image:
        "https://statics.glamit.com.ar/media/catalog/product/g/r/grisino_g3pg22_mg_1.jpg",
    },
    {
      id: 6,
      title: "Remeras",
      image:
        "https://woker.vteximg.com.br/arquivos/ids/171526-600-600/ED7429_APP_photo_front_white.jpg?v=637019023395370000",
    },
  ]);
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToscroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} autoplay={true}>
      {items.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <div className="card">
            <div className="card-image">
              <img className="img-on-card" src={item.image} alt="" />
            </div>
            <ul className="social-icons">
                        <li className="icons-li"><Link className="icons-a" to="/single-product">Ver</Link></li>
                        {/* <li className="icons-li"><a className="icons-a" href="#"><i className="fa fa-facebook icon-slider"></i></a></li>
                        <li className="icons-li"><a className="icons-a" href="#"><i className="fa fa-facebook icon-slider"></i></a></li>
                        <li className="icons-li"><a className="icons-a" href="#"><i className="fa fa-facebook icon-slider"></i></a></li> */}
                    </ul>
            <div className="details">
              <h2>
                {item.title} <span className="title-description"></span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSilder;
