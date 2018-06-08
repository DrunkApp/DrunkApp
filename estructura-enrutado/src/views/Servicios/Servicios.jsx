import React from "react";

//material-ui components
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



class Servicios extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h1><center><b>Servicios</b></center></h1>
            </div>
            <br />
           
          </div>
          <div className={classes.space20} />
          <div id="images">
            <div className={classes.title}>
              <h2>Barmans</h2>
            </div>
            <br />
            <GridContainer>

              <GridItem xs={12} sm={3}>
                <h4>Ricardo Lopez</h4>
                <img
                  src={"http://style.shockvisual.net/wp-content/uploads/2008/07/barman.jpg"}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                  <Button color="primary">Contratar</Button>
              </GridItem>
              <GridItem xs={12} sm={3} className={classes.marginLeft}>
                <h4>Antonio Juarez</h4>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPfairVuKyvAxX1Vu9LX-ULGrFkghJgzVYM_7IYFYMWuSZn60"}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
                <Button color="primary" >Contratar</Button>
              </GridItem>
              <GridItem xs={12} sm={3} className={classes.marginLeft}>
                <h4>Javier Solis</h4>
                <img
                  src={"https://media-cdn.tripadvisor.com/media/photo-s/0f/cb/c9/f2/barman.jpg"}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
                 <Button color="primary" >Contratar</Button>
              </GridItem>
              <GridItem xs={12} sm={3} className={classes.marginLeft}>
                <h4>Mario Palomino</h4>
                <img
                  src={"https://trabajoypersonal.com/wp-content/uploads/2015/07/C%C3%B3mo-convertirse-en-un-barman.jpg"}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
                 <Button color="primary" >Contratar</Button>
              </GridItem>
              <GridItem xs={8} sm={16}>
                <h3><b>asdsdDA</b></h3>
                <img
                  src={"https://paginas.seccionamarilla.com.mx/img/2597/113.jpg"}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
               
              </GridItem>
            </GridContainer>
            <GridContainer />
            
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(Servicios);