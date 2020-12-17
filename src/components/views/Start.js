import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco3.svg';
import Scrollbar from 'smooth-scrollbar';
import appstore from '../../assets/appstore2.png';
import playstore from '../../assets/playstore2.png';
import cupom from '../../assets/cupom.png';
import direita from '../../assets/ladodireito.png';
import esquerda from '../../assets/ladoesquerdo.png';
import {Grow} from '@material-ui/core';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  root: {
    backgroundColor:'#212121',
    
  },
  div:{
    marginTop:-170,
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '0 2%',
    paddingBottom:'1%',
    position: 'relative',
    maxWidth: 1440,
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    transform: 'translateX(0px) translateY(-105px)',
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
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
  text:{
    width: '30%',

    display:'flex',
    justifyContent:'center',
    alignItems:'left',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'100%',
      paddingTop:20
    },
  },
  divCupom:{
    width: '30%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'70%',
    },

},
    text2:{
      width: '30%',
      display:'flex',
      justifyContent:'flex-end',
      flexDirection:'column',
      [theme.breakpoints.down("sm")]: {
        margin: 'auto',
        width:'100%',
        marginBottom:'10%',
      },

  },
  app:{
    cursor:'pointer',
    width:'35%',
    height:'35%',
    marginRight:'2%',
    position:'relative',
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
  apps:{
    display:'flex',
    position:'absolute',
    bottom:'4%',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      bottom:'3%',
      width:'100%',
    },
  },
  cupom:{
    height:'50%'
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
    fontSize:20,
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    transform: 'scale(0, 1)',
    [theme.breakpoints.down("sm")]: {
      fontSize:18,
    },
  }

});


function Start(props) {
  const { classes } = props;
  const [checkedStart, setCheckedStart] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('start'))){
     
      setCheckedStart(true)
      
    }
    
    
  
 })
 if(checkedStart){
  scrollbar.removeListener();
 }
  return (
    <div id="start" className={classes.root}>
    <div className={classes.background}>
      
    </div>
    <Grow timeout={2000} in={checkedStart}>
    <div className={classes.div}>
          <div className={classes.text}>
                <img src={esquerda}  alt="esquerda" className={classes.imgTexts}/>
          </div>
          <div className={classes.divCupom}>
                <img src={cupom}  alt="cupom" className={classes.cupom}/>
          </div>
          <div className={classes.text2}>
                <img src={direita}  alt="direita" className={classes.imgTexts}/>
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
    </Grow>
    </div>
  );
}



export default withStyles(styles)(Start);
