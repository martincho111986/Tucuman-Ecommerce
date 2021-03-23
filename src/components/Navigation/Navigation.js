import { Badge, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import CarritoCompras from '../CarritoCompras';

import "./navigation.css";
import Hombre from "./Hombre";
import { useSelector } from 'react-redux';
import { getCarrito } from '../../Redux/productos/productosSlice';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSlider = () => setIsOpen((state) => !state);
  const carrito = useSelector(getCarrito)
  const badgeCount = carrito.length;

  return (
    <>
    
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="//">LogoTienda</Link>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/" className="desktop-item">
              Dropdown
            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              dropdown menu
            </label>
            <ul className="drop-menu">
              <li>
                <Link to="/">Drop Menu 1</Link>
              </li>
              <li>
                <Link to="/">Drop Menu 2</Link>
              </li>
              <li>
                <Link to="/">Drop Menu 3</Link>
              </li>
              <li>
                <Link to="/">Drop Menu 4</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/" className="desktop-item">
              Hombres
            </Link>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Hombres
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xGjfMWley97erGphCGYmkgjdZ1QQISZ1Ow&usqp=CAU"
                    alt=""
                  />
                </div>
                <Hombre />
              </div>
            </div>
          </li>
          <li>
            <Link to="/" className="desktop-item">
              Mujeres
            </Link>
            <input type="checkbox" id="showWomen" />
            <label htmlFor="showWomen" className="mobile-item">
              Mujeres
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    src="https://previews.123rf.com/images/indiraswork/indiraswork1707/indiraswork170700173/82697985-fondo-blanco-estudio-bella-mujer-dama-primavera-oto%C3%B1o-colecci%C3%B3n-glamour-modelo-ropa-de-moda-desgaste-estil.jpg"
                    alt=""
                  />
                </div>
                <Hombre />
              </div>
            </div>
          </li>
          <li>
            <Link to="/" className="desktop-item">
              Niños
            </Link>
            <input type="checkbox" id="showChildren" />
            <label htmlFor="showChildren" className="mobile-item">
              Niños
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    src="https://i.pinimg.com/originals/bd/06/d7/bd06d7d0d5436141d9ec510f8d00dfff.jpg"
                    alt=""
                  />
                </div>
                <Hombre />
              </div>
            </div>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li key='2'>
            <Badge count={badgeCount}>
              <ShoppingCartOutlined
                style={{ color: 'white', fontSize: 20 }}
                onClick={toggleSlider}
               
              />
            </Badge>
          </li>
        </ul>
        
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
    <Drawer
    title='Carrito de compras'
    placement='right'
    closable={false}
    onClose={toggleSlider}
    visible={isOpen}
    width='450'
  >
   <CarritoCompras />
  </Drawer>
    </>
  );
};

export default Navigation;
