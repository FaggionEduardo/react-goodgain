import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Montserrat from "../../assets/Montserrat-Medium.ttf"
import background from '../../assets/arco2.svg';
import Scrollbar from 'smooth-scrollbar';
import phone from '../../assets/phone.png';
import appstore from '../../assets/appstore2.png';
import playstore from '../../assets/playstore2.png';
import c1 from '../../assets/Group-159.png';
import {Fade, Slide} from '@material-ui/core';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
  },
  div:{
    
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    maxWidth: 1440,
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    transform: 'translateX(0px) translateY(-105px)',
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'space-between',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
    },
  },
  background:{
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100px',
    backgroundColor:'#121212',
    top: 0,
    height: 100,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  phone:{
    width: '25%',
    marginRight: '5.5%',
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      marginBottom: '10%',
    },
  },
  imgPhone:{
    paddingTop: 0,
    marginTop: '-48px',
    marginBottom: '-46px',
    marginLeft: 50,
    maxWidth: 300,
    maxHeight: 300,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    
  },
  text:{
    width: '40%',
    padding:'1% 0',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'100%',
      padding:'4%',
      marginTop:'5%'
    },
    
  },
    divApps:{
      width: '30%',
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      flexDirection:'column',
      paddingBottom:'1%',
      
      [theme.breakpoints.down("sm")]: {
        margin: 'auto',
        width:'100%',
        padding:'4%',
        
      },
      
  },
  apps:{
    display:'flex',
    flexWrap: 'wrap'
  },
    
  download:{
    fontFamily: "'Montserrat'",
    fontSize: 34,
    color: '#ffffff',
    textAlign: 'left',
    display:'flex',
    flexDirection:'column',
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    }, 
    
  },
  titleApps:{
    ontFamily: "'Montserrat'",
    fontSize: 26,
    color: 'yellow',
    textAlign: 'left',
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    }, 

  },
  titleBe:{
    ontFamily: "'Montserrat'",
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'left',
    fontWeight:600,
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    }, 

  },
  app:{
    marginRight:5,
    cursor:'pointer',
    width:150,
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      width:120,
      
    },
    '&:hover > img': {
      transition:'.4s  ease-in-out',
      transform:'scale(0.95)',
      
   },
   '&:hover > div': {
    transition:'.4s  ease-in-out',
    transitionDelay:'0.4s',
    transform:'scale(0.95,0.95)',
    
 },
 '&:hover > div > h2': {
  transition:'.4s  ease-in-out',
  transitionDelay:'0.6s',
  transform:'scale(1,1)',
  
},
  },
  imgApp:{
    height:'100%',
    width:'100%'
  },
  c1:{
    position:'absolute',
    left: '-4%',
    top: '-50%',
    [theme.breakpoints.down("sm")]: {
      top: '-25%',
      left: '-10%',
    },
    width:120,
    willChange: 'transform',
    animation: '$upDownC1 5s alternate infinite ease-in-out',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s',
  },
  "@keyframes upDownC1": {
    "0%": {
      transform: 'translatey(10%)'
      
    },
    
    "100%": {
      transform: 'translatey(-10%)'
    }
  },
  '@font-face': {
    fontFamily: 'Montserrat',
    src: `url(${Montserrat})`,
  },
  animation:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    transform: 'scale(0, 0.95)',
    visibility: 'visible',
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundSize: '200%',
  },
  "@keyframes animation": {
    "20%": {
      transform:'scale(0.9)',
    },
    
    "100%": {
      transform: 'scale(0.9, 1)'
    },
  },
  textAnimation:{
    fontSize:22,
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    transform: 'scale(0, 1)',
    [theme.breakpoints.down("sm")]: {
      fontSize:16,
    },
  }
});


function Download(props) {
  const { classes } = props;
  const [checkedDownload, setCheckedDownload] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('download'))){
     
      setCheckedDownload(true)
      
    }
    
    
  
 })
 if(checkedDownload){
  scrollbar.removeListener();
 }
  return (
    <div id="download" className={classes.root}>
    <div className={classes.background}>
      
    </div>
    <Fade timeout={3000} id='download' in={checkedDownload}>
    <div className={classes.div}>
    <Slide timeout={2000} in={checkedDownload}>
      <div className={classes.phone}>
      <img src={phone} alt="phone" className={classes.imgPhone}/>
      </div>
      </Slide>
      <div className={classes.c1}>
        <img src={c1} alt="c1" className={classes.c1}/>
      </div>
      <div className={classes.text}>
      <div className={classes.download}><span>Seja o <span style={{fontSize:38,color:'yellow' }}>primeiro</span> a descobrir</span><span> um <span style={{borderBottom:'4px solid yellow'}}>novo jeito</span> de</span><span> competir online!</span></div>
      </div>
      <div className={classes.divApps}>
      <div className={classes.titleBe}>Apenas 100 vagas disponíveis!</div>
        <div className={classes.titleApps}>Baixe agora no pré-lançamento:</div>
      <div className={classes.apps}>
        <div className={classes.app}>
          <img src={appstore}  alt="appstore" className={classes.imgApp}/> 
          <div className={classes.animation}><h2 className={classes.textAnimation}>Baixe agora!</h2></div>
        </div>
        <div className={classes.app}>
          <img src={playstore}  alt="playstore" className={classes.imgApp}/>
          <div className={classes.animation}><h2 className={classes.textAnimation}>Baixe agora!</h2></div>
        </div>   
      </div>
      </div>
    </div>
    </Fade>
    </div>
  );
}



export default withStyles(styles)(Download);
