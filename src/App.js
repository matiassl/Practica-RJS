import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// COMPONENTES
import Menu from "./componentes/navbar/navbar";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";


// PAGINAS
import Home from "./pages/home/home";
import Productos from "./pages/productos/productos";
import Servicios from "./pages/servicios/servicios";
import Contacto from "./pages/contacto/contacto";
import Error from "./pages/error/error";
import itemDetailContainer from "./componentes/itemDetailContainer/itemDetailContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="usuario"/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/itemDetailContainer/:id" element={<itemDetailContainer />} />
          <Route path="*" element={<Error/>}/>        
        </Routes>
        

       <Home/>
        </div>
      </Router>    
        
      
    );
  }
}

export default App;
