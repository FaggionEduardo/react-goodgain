import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import esquerda from '../../assets/esquerda2.png'
import direita from '../../assets/direita2.png'
import {Grow} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.main,
    
  },
  container: {
    display: 'flex',
    position: 'relative',
    padding:0,
    paddingTop:150,
    paddingBottom:150,
    margin:0,
    maxWidth:'none',
    
    [theme.breakpoints.down("sm")]: {
      paddingBottom:0,
      paddingTop:220,
    },
  },
  container2: {
    maxWidth: 1440,
    width:"80%",
    display: 'flex',
    position: 'relative',
    padding:"2%",
    margin:'auto',
    paddingBottom:0,
    justifyContent:'space-between',
    alignItems:'space-between',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
    },
  },
  img:{
    width:'48%',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
    },
  }
 
  

});


function Start(props) {
  const checked=true
  
 
 
  const { classes } = props;

  return (
    <section id='home' className={classes.root}>
      <Container className={classes.container}>
        <Container className={classes.container2}>
          <img src={esquerda}  alt="esquerda" className={classes.img}/>
          <img src={direita}  alt="direita" className={classes.img}/>
         
        </Container>
      </Container>
    </section>
  );
}

Start.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Start)
