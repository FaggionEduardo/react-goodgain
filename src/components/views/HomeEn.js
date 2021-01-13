import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import comingsoon from '../../assets/comingsoon.png'
import comingsoonM from '../../assets/comingsoonM.png'
import aussie from '../../assets/aussie.png'

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
      paddingTop:200,
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
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      width:"100%",
    },
  },
  img:{
      width:'100%',
  },
  img2:{
    width:'50%',
    marginTop:'10%',
},
  desktop:{
    display:'none',
    [theme.breakpoints.up("sm")]: {
      
      display:'flex',
    },
  },
  mobile:{
      display:'flex',
    [theme.breakpoints.up("sm")]: {
      display:'none'
    },
  },
 
  

});


function Home(props) {
 
  
 
 
  const { classes } = props;

  return (
    <section id='home' className={classes.root}>
      <Container className={classes.container}>
        <Container className={`${classes.container2} ${classes.desktop}`}>
          <img src={comingsoon}  alt="comingsoon" className={classes.img}/>
         
         
        </Container>
        <Container className={`${classes.container2} ${classes.mobile}`}>
          <img src={comingsoonM}  alt="comingsoonM" className={classes.img}/>
          <img src={aussie}  alt="aussie" className={classes.img2}/>
        </Container>
      </Container>
    </section>
  );
}



export default withStyles(styles)(Home)
