/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    
        
        
            
           
            <Header
             
              color="dark"
              fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "dark"
          }}
              rightLinks={
                <List className={classes.list}>
                  


                  <ListItem className={classes.listItem}>


                   <Link to="Inicio" className={classes.link}>                           
                <Button color="default" size="lg" simple>
                  Inicio
                </Button>
              </Link>




                    <Link to="drunk-app" className={classes.link}>            
                <Button color="default" size="lg" simple>
                  DrunkApp
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
           
            
            
       
        
      
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
