import React from 'react'
import "./navigation.css";
import { Link } from "react-router-dom";

const Hombre = () => {
    return (
        <>
        <div className="row">
                  <header>Indumentaria</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/">Pantalones</Link>
                    </li>
                    <li>
                      <Link to="/">Remeras</Link>
                    </li>
                    <li>
                      <Link to="/">Camisas</Link>
                    </li>
                    <li>
                      <Link to="/">Buzos</Link>
                    </li>
                    <li>
                      <Link to="/">Shorts</Link>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Calzados</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/">Zapatillas</Link>
                    </li>
                    <li>
                      <Link to="/">Zapatos</Link>
                    </li>
                    <li>
                      <Link to="/">Business cards</Link>
                    </li>
                    <li>
                      <Link to="/">Custom Logo</Link>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <Link to="/">Graphics</Link>
                    </li>
                    <li>
                      <Link to="/">Vectors</Link>
                    </li>
                    <li>
                      <Link to="/">Business cards</Link>
                    </li>
                    <li>
                      <Link to="/">Custom Logo</Link>
                    </li>
                  </ul>
                </div>
        </>
    )
}

export default Hombre
