import React, {Component} from 'react';

import classes from './Pagos.css';
export default class Pagos extends Component{
  render(){
    return (<div>
      <img src="http://www.culqi.com/images/default.png"/><br/><br/><br/><br/>
      <input placeholder="Nombre..."></input>
     <br/>
     <br/>
      <input placeholder="Documento de identidad..."></input><br/><br/><br/>
      <button>Pagar</button><br/><br/><br/>
      </div>
      )
  }
}