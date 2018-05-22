import React, { Component } from 'react';

import './Contenido.css';

import movil from './images/movil.png';


class Contenido extends Component {
   constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  };
  render() {
    return (


    	
      <div className="Contenido">
      	<h1>DrunkApp</h1>
        <div class="responsive">
  <div class="banner">
  <h2>Descarga nuestra App Movil</h2>
     <img src={movil} alt="movil" />
     </div>




         
            
    
  </div>
  






        
        

        







       </div>
       
    );
  }
}

export default Contenido;
