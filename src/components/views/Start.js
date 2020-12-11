import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco3.svg';
import Scrollbar from 'smooth-scrollbar';
import appstore from '../../assets/appstore2.png';
import playstore from '../../assets/playstore2.png';
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
    width: '100%',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'100%',
      paddingTop: 25,
      paddingRight: 5,
      paddingBottom: 25,
      paddingLeft: 5
    },

  },
  download:{
    marginTop: 35,
    marginBottom: '-10px',
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight:600,
    display:'block',
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      display:'flex',
      flexDirection:'column'
    },
  },
  app:{
    margin:20,
    cursor:'pointer',
    height:76,
    width:214,
  },
  divApps:{
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:35,
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
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
      <h2 className={classes.download}><span>Comece a ganhar dinheiro jogando! </span> <span>   Baixe agora!</span></h2>
      <div className={classes.divApps}>
            <img src={appstore}  alt="appstore" className={classes.app}/>   
            <img src={playstore}  alt="playstore" className={classes.app}/>
      </div>
      </div>
    </div>
    </Grow>
    </div>
  );
}



export default withStyles(styles)(Start);
