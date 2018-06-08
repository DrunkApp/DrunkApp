import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';


import image1 from "../../images/pilsen.jpg"
import image2 from "../../images/cristal.jpg"
import image3 from "../../images/cusqueñanegra.jpg"
import image4 from "../../images/cusqueña.jpg"

const styles = theme => ({
  root: {

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

    width: 1350,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 0, 0, 1)',
  },
});

const tileData = [
   {
    img: image1,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image3,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
   {
    img: image4,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
   
 ];

function Cervezas(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={600} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <h1 center>Cervezas DRUNKAPP</h1>
          <ListSubheader component="div">Relacion de los licores más vendidos por DRUNKAPP</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Descripción: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Cervezas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cervezas);