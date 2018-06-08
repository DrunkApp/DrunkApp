import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import paypal from "assets/img/paypal.png";
import culqi from "assets/img/culqii.png";
import efectivo from "assets/img/efectivo.jpg";


class FormasPago extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h1><center><b>Bebidas - DrunkApp <img src={"http://www.gifss.com/alimentos/bebidas/cocktail/cocktail-010.gif"}/></b></center></h1>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <h3><b>Piscos</b></h3>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKU0M_D5hjkj0D7aCAicRCOW34AFrsooJ5xqX9wjnS_RjJNfAY"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <h3><b>Cervezas</b></h3>
                <img
                  src={"data:image/jpeg;base64,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"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <h3><b>Vinos</b></h3>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZiGZYGoK9xoyngdojm-sij6mTLorlaKGPKWZm2cmm9nchF44Kg"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>


              <GridItem xs={12} sm={4}>
                <h3><b>Vodkas</b></h3>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTA0JZL-b_r7pQ1BzJUYpsWv0ojfSz8tbp5fgrpuWFGZUMHKBW"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>

              
              <GridItem xs={12} sm={4}>
                <h3><b>Wiskis</b></h3>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0krI4KXrsVYvfchQ0SdvSWslyO7H4Fit6K_Ui45v-jFIbuTR0"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>
            
            <GridItem xs={12} sm={4}>
                <h3><b>Rones</b></h3>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNWXq6nY2QGGetHOKn2Xp6FO9OB9v3TQ1IkwhSdDrptGt2Ugdiw"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Comprar</Button></center>
              </GridItem>
              <GridItem xs={12} sm={25}>
                <h3><b>Solo con DrunkApp tienes acceso a las mejores bebidas, en el menor tiempo posible</b></h3>
                <img
                  src={"https://paginas.seccionamarilla.com.mx/img/2864/594.jpg"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
               
              </GridItem>
              
            </GridContainer>
            
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(FormasPago);
