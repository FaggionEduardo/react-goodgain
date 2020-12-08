import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import control from '../../assets/Group-152.png';
import background from '../../assets/arco.svg';
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
    transform: 'rotateX(-180deg)',
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '2% 0',
    position: 'relative',
    maxWidth: 1440,
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    transform: 'translateX(0px) translateY(-105px)',
    borderRadius: 30,
    zIndex: 5,
    paddingTop: 5,
    paddingBottom: 0,
    display:'flex',
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
    transform: 'rotateX(180deg)',
  },
  phone:{
    width: '36.7%',
    marginRight: '5.5%',
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
    },
  },
  imgPhone:{
    paddingTop: 0,
    marginTop: '-48px',
    marginBottom: '-46px',
    maxWidth: 300,
    
  },
  text:{
    width: '57.8%',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'100%',
      paddingTop: 25,
      paddingRight: 20,
      paddingBottom: 25,
      paddingLeft: 20
    },

  },
  download:{
    marginTop: 35,
    marginBottom: '-10px',
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'left',
    fontWeight:600
  },
  app:{
    marginRight:5,
    cursor:'pointer',
    height:76,
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
    <div className={classes.root}>
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
      <div className={classes.download}>Baixe agora mesmo!</div>
      <div id="apps" style={{marginTop:20}}>
            <img src={appstore}  alt="appstore" className={classes.app}/>   
            <img src={playstore}  alt="playstore" className={classes.app}/>
      </div>
      </div>
    </div>
    </Fade>
    </div>
  );
}



export default withStyles(styles)(Download);
