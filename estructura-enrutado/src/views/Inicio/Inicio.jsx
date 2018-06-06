import React from "react";

import classNames from "classnames";

import { Link } from "react-router-dom";
import withStyles from "material-ui/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        

      

          
          <HeaderLinks/>
         
                 
        
        <Parallax image={require("assets/img/botellas.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Drunk App</h1>
                  <h3 className={classes.subtitle}>
                    ACA VA A IR EL COMPONENTE DE GOMEZ
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
         <Parallax image={require("assets/img/bg3.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              
            </GridContainer>
          </div>
        </Parallax>


               

        
        
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
