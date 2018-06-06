import React from "react";

import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";




class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        
        
            
           
            <Header
             
              color="dark"
              rightLinks={
                <List className={classes.list}>
                  


                  <ListItem className={classes.listItem}>


                   <Link to="drunk-app" className={classes.link}>                           
                <Button color="default" size="lg" simple>
                  Inicio
                </Button>
              </Link>




                    <Link to="drunk-app" className={classes.link}>            
                <Button color="default" size="lg" simple>
                  Drunk App
                </Button>
              </Link>


              <Link to="galeria" className={classes.link}>                
                <Button color="default" size="lg" simple>
                  Galeria
                </Button>       
              </Link>


              <Link to="promociones" className={classes.link}>                
                <Button color="default" size="lg" simple>
                  Promociones
                </Button>      
              </Link>



              <Link to="servicios" className={classes.link}>
                
                <Button color="default" size="lg" simple>
                  Servicios
                </Button>             
              </Link>

              <Link to="locales" className={classes.link}>
                
                <Button color="default" size="lg" simple>
                  Locales
                </Button>             
              </Link>


              <Link to="contacto" className={classes.link}>
                
                <Button color="default" size="lg" simple>
                  Contactanos
                </Button>             
              </Link>
                    
                    
                  </ListItem>
                  
                </List>
              }
            />
           
            
            
       
        
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
