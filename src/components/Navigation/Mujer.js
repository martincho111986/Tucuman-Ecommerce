import React from 'react'
import "./navigation.css";
import { Link } from "react-router-dom";

const Mujer = () => {
    return (
        <>
        <div className="row">
                  <header>Hombres</header>
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

export default Mujer
