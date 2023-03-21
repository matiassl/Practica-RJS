import React, { Component } from "react";
import "./App.css";
import Menu from "./componentes/navbar/navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import CardBox from "./componentes/card/card";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <ItemListContainer greeting="usuario"/>
        <div className="container">
          <div className="row d-flex justify-content-around">
              <CardBox titulo="Windows 10" descripcion="Sistema Operativo"/>
              <CardBox titulo="AVAST" descripcion="AntiVirus"/>
              <CardBox titulo="Microsoft Office" descripcion="Herramientas office de Windows"/>
              <CardBox titulo="Filmora" descripcion="Edicion de Videos"/>
          </div>
            
        </div>
        
      </div>
    );
  }
}

export default App;
