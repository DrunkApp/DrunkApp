
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import image1 from "../../images/barman1.jpg"
import image2 from "../../images/barman2.jpg"
import image3 from "../../images/barman3.jpg"
import image4 from "../../images/barman4.jpg"
import image5 from "../../images/barman5.jpg"

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
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(255,0,0,1) 100%)',
  },
});

const tileData = [
   {
    img: image1,
    title: 'Piero Palomino',
    author: 'author',
    cols: 2,
  },
  {
    img: image2,
    title: 'Paul Mogrovejo',
    author: 'author',
    cols: 1,
  },
  {
    img: image3,
    title: 'Romero Solis',
    author: 'author',
    cols: 2,
  },
   {
    img: image4,
    title: 'Paolo Borgues',
    author: 'author',
    cols: 2,
  },
 {
    img: image5,
    title: 'Javier Lopez',
    author: 'author',
    cols: 2,
  },
 
 
 ];


function Barman(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    
    <h1>Barmans DRUNKAPP</h1>
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
                  <Button variant="raised" color="primary" className={classes.button}>Contratar</Button>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Barman.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Barman);