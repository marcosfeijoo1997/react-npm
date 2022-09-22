import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import Carrito from './imagenes/carrito.png'


function App() {
  return (
    <div className="App">
      <Navbar src="https://viaplaceholder.com/150x150"/>
      
      <Navbar>    <li>Inicio</li>
            <li>Nosotros</li>
            <li href='#productos'>Productos</li >
            <li>Servicios</li>
            <li>Sucursales</li>
            <img src= {Carrito}/></Navbar>
          
   
   
    </div>
    
  );
}

export default App;
