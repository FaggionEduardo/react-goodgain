import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import appstore from '../../assets/appstore.png';
import playstore from '../../assets/playstore.png';
import phone from '../../assets/phone.png';
import c1 from '../../assets/Group-156.png';
import c2 from '../../assets/Group-151.png';
import c3 from '../../assets/Group-157.png';
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
  },
  container2: {
    maxWidth: 1440,
    width:"80%",
    display: 'flex',
    position: 'relative',
    padding:"2% 0",
    margin:'auto',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      padding:"30px 0!important",
    },
  },
  containerItem: {
    display: 'flex',
    flexDirection:'column',
    marginRight: '5.5%',
    width: '47.25%',
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      width: '100%',
   
    },
    
    position:'relative',
    padding:0
  },
  containerImg:{
    height:360,
    [theme.breakpoints.down("sm")]: {
      height: '70vw',
    },
  },
  text: {
    fontSize: '3vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '7vw',
    },
    paddingTop:40,
    paddingBottom:10,
    margin:0,
    lineHeight:'1em',
    fontWeight: 600,
    color:'#ffffff',
    fontFamily:"'Gilroy',Helvetica,Arial,Lucida,sans-serif",
  },
  animationGradient:{
    background: 'linear-gradient(-45deg,#e94834,#e6007e,#e94834,#ffffff)',
    fontSize: '3vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '7vw',
    },
    lineHeight:'1em',
    fontWeight: 600,
    fontFamily:"'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    marginBottom: '5.82%',
    paddingBottom:10,
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    animation: '$gradient 8s ease-in-out infinite',
    WebkitBackgroundClip:'text'
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: '0% 50%'
    },
    "50%": {
      backgroundPosition: '100% 50%'
    },
    "100%": {
      backgroundPosition: '0% 50%'
    }
  },
  span:{
    color:'#000000',
  },
  text2: {
    color: '#fff',
    fontWeight: 200,
    fontFamily: "Gilroy-regular,Helvetica,Arial,Lucida,sans-serif",
    fontSize: '2vw',
    [theme.breakpoints.down("sm")]: {
      fontSize: '4vw',
    },
    paddingTop: '2%',
    paddingBottom: '2%',
    marginBottom: 0,
    verticalAlign: 'baseline',
    display:'flex',
    flexDirection:'column',
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  responsiveText:{
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      display:'block'
    },
  },
  
  app:{
    marginRight:10,
    cursor:'pointer',
    height:'3vw',
    [theme.breakpoints.down("sm")]: {
      marginRight:2,
      height:'5vw'
    },
  },
  phone:{
    maxWidth:'100%',
    height:'auto'
  },
  gradient:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
  },
  divPhone:{
    willChange: 'transform',
    animation: '$upDownPhone 3s alternate infinite ease-in-out',
    width:'100%',
    maxWidth:'100%',
    left: '-27%',
    [theme.breakpoints.down("sm")]: {
      left: '2%',
    },
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s'
  },
  "@keyframes upDownPhone": {
    "0%": {
      transform: 'translatey(-2%)'
      
    },
    
    "100%": {
      transform: 'translatey(2%)'
    }
  },
  
c1:{
  maxWidth:'100%',
  height:'auto'
},
divC1:{
  willChange: 'transform',
  animation: '$upDownC1 5s alternate infinite ease-in-out',
  width:'100%',
  maxWidth:'100%',
  top:'20%',
  left: '61%',
  [theme.breakpoints.down("sm")]: {
    top: '-6%',
  },
  margin:'auto',
  position: 'absolute',
  transition: '.3s',
  animationDuration: '5s',
  animationDelay: '-5s',

},
"@keyframes upDownC1": {
  "0%": {
    transform: 'translatey(20%)'
    
  },
  
  "100%": {
    transform: 'translatey(-20%)'
  }
},
divC2:{
  willChange: 'transform',
  animation: '$upDownC2 5s alternate infinite ease-in-out',
  width:'100%',
  maxWidth:'100%',
  top:'101%',
  left: '39%',
  [theme.breakpoints.down("sm")]: {
    left: '49%',
    top:'49%',
  },
  margin:'auto',
  position: 'absolute',
  transition: '.3s',
  animationDuration: '5s',
  animationDelay: '-9s',

},
"@keyframes upDownC2": {
  "0%": {
    transform: 'translatey(-10%)'
    
  },
  
  "100%": {
    transform: 'translatey(10%)'
  }
},
divC3:{
  willChange: 'transform',
  animation: '$upDownC3 5s alternate infinite ease-in-out',
  width:'100%',
  maxWidth:'100%',
  top:'51%',
  left: '-25%',
  [theme.breakpoints.down("sm")]: {
    left: '2%',
    top:'31%',
  },
  margin:'auto',
  position: 'absolute',
  transition: '.3s',
  animationDuration: '5s',
  animationDelay: '-7s',

},
"@keyframes upDownC3": {
  "0%": {
    transform: 'translatey(-10%)'
    
  },
  
  "100%": {
    transform: 'translatey(10%)'
  }
},

});


function Start(props) {
  const checked=true
  
 
 
  const { classes } = props;

  return (
    <section id='home' className={classes.root}>
      <Container className={classes.container}>
        <Container className={classes.container2}>
        <Container className={classes.containerItem}>
         <h1  className={classes.text}>Transforme
         <br/> 
         sua habilidade
         <br/> 
         <span  className={classes.animationGradient}>
          em lucro
         </span>.
         </h1>
         
         <span  className={classes.text2}>
           <span className={classes.responsiveText}>
              <span>Desafie outros jogadores ou </span>
              <span>participe de torneios online. </span>
           </span>
         
          <span style={{color:'#fff'}}>
          Sua vitória vale <span className={classes.gradient}>dinheiro</span>!
          </span>
          </span>
          <Grow timeout={2000} in={checked}>
          <div id="apps">
            <img src={playstore}  alt="playstore" className={classes.app}/>
            <img src={appstore}  alt="appstore" className={classes.app}/>
          </div>
          </Grow>
         </Container>
         <Container className={`${classes.containerItem} ${classes.containerImg}`}>
         <div   className={classes.divC1}>
        <img src={c1} alt="c1" className={classes.c1}/>
        </div>
        <div   className={classes.divPhone}>
        <img src={phone} alt="phone" className={classes.phone}/>
        </div>
        
        <div   className={classes.divC2}>
        <img src={c2} alt="c2" className={classes.c2}/>
        </div>
        <div   className={classes.divC3}>
        <img src={c3} alt="c3" className={classes.c3}/>
        </div>
        
        
        
         </Container>
        </Container>
      </Container>
    </section>
  );
}

Start.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Start)
