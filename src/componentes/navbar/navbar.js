import React from "react";
import "./navbar.css";
import "../carrito/carrito";
import Carrito from "../carrito/carrito";
const Menu = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <h1>PINFO</h1>
        </div>
      <ul className="ul">
        <li>
          <a href="www.google.com" className="menuItem">
            Inicio
          </a>
        </li>
        <li>
          <a href="www.google.com" className="menuItem">
            Productos
          </a>
        </li>
        <li>
          <a href="www.google.com" className="menuItem">
            Servicios
          </a>
        </li>
        <li>
          <a href="www.google.com" className="menuItem">
            Contacto
          </a>
        </li>
      <li>
        <Carrito/>   
      </li>
      </ul>
    </nav>
  );
};

export default Menu;
