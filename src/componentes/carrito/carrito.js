import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "./carrito.css"

const Carrito = () =>{
   return ( 
    <>
    <FontAwesomeIcon icon={faCartShopping} className="icono"/>
    <span style={{color: "white"}}>(2)</span>
    </>
      
  
  );
}

export default Carrito;
