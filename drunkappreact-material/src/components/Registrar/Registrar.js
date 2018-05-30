import React, { Component } from 'react';
import {TextField, Button, Divider, Card, Typography, CardContent, CardActions} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
 
	const style = {
				  card: {
				    maxWidth: 345,

				  },
				  media: {
				    height: 0,
				    paddingTop: '56.25%' // 16:9
				  }
				}
  	
export default class Registrar extends Component {
	
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
     	<CardContent>
       <Typography variant="headline" component="h2">
            Registrate
        </Typography>
    	<TextField
          id="password-input"
          label="Nombre"
          className={title}
          type="Nombre"
          autoComplete="current-name"
          margin="normal"
        />
        <Divider />
        <TextField
          id="password-input"
          label="Correo Electronico"
          className={title}
          type="email"
          autoComplete="current-email"
          margin="normal"
        />
        <Divider />
        <TextField
          id="password-input"
          label="Contraseña"
          className={title}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Divider />
        </CardContent>
        <CardActions>
        <Button color="primary" variant="raised">
        Registrarse
        </Button>
        </CardActions>
        </Card>
        </div>
    );
  }
}
