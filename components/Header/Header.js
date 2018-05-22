import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        

          

            <nav class="navegacion">
      <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Galeria</a>
        <ul class="submenu">
            <li><a href="#"> #1</a></li>
            <li><a href="#"> #2</a></li>
            <li><a href="#"> #3</a></li>
          </ul>
          </li>
        <li><a href="#">Promociones</a></li>
        <li><a href="#">Locales</a></li>
        <li><a href="#">¿Quienes Somos?</a></li>
        <li><a href="#">Formas de Pago</a></li>

      </ul>
    </nav>
          
        </div>
       
    );
  }
}

export default Header;
