import React from "react";

const style = {
    backgroundColor: "#F5B83D",
    height: "80px"
}

const Saludo = (props) =>{
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={style}>
            <h3>Bienvenido {props.greeting}, a la plataforma de venta de software</h3>
        </div>
        
    );
};

export default Saludo;