import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

import Carrito from "../carrito/carrito";
const Menu = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <h1>PINFO</h1>
        </div>
      <ul className="ul">
        <Link className="link" to="/">
          Inicio
        </Link>
        <Link className="link" to="/productos">
          Productos
        </Link>
        <Link className="link" to="/servicios">
          Servicios
        </Link>
        <Link className="link" to="/contacto">
          Contacto
        </Link>
        <Link className="link" to="/">
          <Carrito/> 
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
