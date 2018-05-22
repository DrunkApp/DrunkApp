import React, { Component } from 'react';




//COMPONENTES DRUNKAPP

import Header from './Header/Header';

import Contenido from './Contenido/Contenido';

import Galeria from './Galeria/Galeria';
import Footer from './Footer/Footer';
import Producto from './Producto/producto'


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header />
        <Contenido />
        <Producto />
        <Galeria />
        <Footer />



      </div>
    );
  }
}

export default App;
