
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import image1 from "../../images/piscos.PNG"
import image2 from "../../images/cervezas.PNG"
import image3 from "../../images/vinos.PNG"
import image4 from "../../images/rones.PNG"
import image5 from "../../images/vodkas.jpg"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const tileData = [
   {
    img: image1,
   
    author: 'author',
    cols: 2,
  },
  {
    img: image2,
 
    author: 'author',
    cols: 1,
  },
  {
    img: image3,
   
    author: 'author',
    cols: 2,
  },
   {
    img: image4,
   
    author: 'author',
    cols: 2,
  },
  {
    img: image5,

    author: 'author',
    cols: 1,
  },
 
 
 ];


function Productos(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
    <h1>Productos DRUNKAPP</h1>
      <GridList className={classes.gridList} cols={4.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <Button variant="raised" color="primary" className={classes.button}>
        ver
      </Button>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Productos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Productos);