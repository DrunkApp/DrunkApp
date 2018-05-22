import React, { Component } from 'react';

import './Galeria.css';

import licores from './images/licores.png';
import licores1 from './images/licores1.png';
import licores2 from './images/licores2.png';
import tragos from './images/tragos.png';

class Galeria extends Component {
  render() {
    return (
      <div className="Galeria">
        

          <div class="con-cajas">
<div class="cajas">
    <div class="imagen">
    <h2>Nombre del Producto</h2>
        <img src={licores2} alt="licores" />
    </div>
    <h2>Descripcion de la Bebida</h2>
   
  </div>
  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores2} alt="tragos" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>
  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores2} alt="licores1" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>

  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores2} alt="licores2" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>
  </div>





  <div class="con-cajas">
<div class="cajas">
    <div class="imagen">
    <h2>Nombre del Producto</h2>
        <img src={licores1} alt="licores" />
    </div>
    <h2>Descripcion de la Bebida</h2>
   
  </div>
  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores1} alt="tragos" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>
  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores1} alt="licores1" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>

  <div class="cajas">
    <div class="">
    <h2>Nombre del Producto</h2>
      <img src={licores1} alt="licores2" />
    </div>
    <h2>Descripcion de la Bebida</h2>
    
  </div>
  </div>

           
          
        </div>
       
    );
  }
}

export default Galeria;
