import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardBox from "../card/cardBox";
import Row from 'react-bootstrap/Row';

import "./itemListContainer.css";


const style = {
    backgroundColor: "#F5B83D",
    height: "80px"
}

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => { setProductos(res.data) });
    }, []);



    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={style}>
                <h3>Bienvenido {props.greeting}, a la plataforma de venta de software</h3>
            </div>
            <div className="container mt-5">
                
                <Row className="row" xs={3}>
                 
                           {
                        productos.map(  (producto)=>{
                            return (
                                <Link to={`/itemDetailContainer/${producto.id}`} className="link">
                                       <CardBox data={producto} />
                                </Link>
                         
                            )
                        })
                    } 
                   
                 
                    </Row>
                </div>
           

        </>
    );
};

export default ItemListContainer;