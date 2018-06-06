import React from "react";

import withStyles from "material-ui/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";

import efectivo from "assets/img/efectivo.jpg";


class FormasPago extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div>

       <HeaderLinks/>

      <div className={classes.section}>
        <div className={classes.container}>
          
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h1><center><b>Servicios</b></center></h1>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <h3><b>Paypal</b></h3>
                <img
                  src={efectivo}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
               
              </GridItem>

              

              
             
              
            </GridContainer>
            
          </div>
          <div className={classes.space50} />
        </div>
      </div>
      </div>
    );
  }
}
export default withStyles(typographyStyle)(FormasPago);