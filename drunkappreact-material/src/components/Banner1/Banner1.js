import React, { Component } from 'react';
import {Paper, Card, Typography, CardContent, CardActions} from '@material-ui/core/';
import PropTypes from 'prop-types';
import Imagen from '../../images/bebidas1.jpg'; 
import Grid from '@material-ui/core/Grid';
	const style = {
          imagen:{
              maxWidth: '75%'
          },
				  card: {
				    maxWidth: 345,

				  },
				  media: {
				    height: 0,
				    paddingTop: '56.25%' // 16:9
				  }
				}
  	
export default class Banner1 extends Component {
	
	state = {
		open: false,
		form: {
				title: '',
				descriptions: '',
				muscles: '' 
		}
	}

  render() {
  	const {open, form: {title, description, muscles}} = this.state
    return (
    	<div>
    	<Card style={style.card}>
          
     	     <Typography variant="headline" component="h2">
                Hacer Pedido

            </Typography>
      <CardContent>
      <Grid container>
      <Grid item sm={6} >
             <img src={Imagen}  style={style.imagen} alt="imagen" />
        

      </Grid>
      
      <Grid item sm={6} >
            <li> Realiza tu pedido </li>
            <li> Realiza tu pedido </li>
            <li> Realiza tu pedido </li>
      </Grid>
      </Grid>
      </CardContent>
      </Card>
      </div>
    );
  }
}
