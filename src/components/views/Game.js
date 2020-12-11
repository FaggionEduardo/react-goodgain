import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import callofduty from '../../assets/cod.png'
import fifa from '../../assets/fifa21.png'
import r6 from '../../assets/rainbow.png'
import callofdutyLogo from '../../assets/warzonelogo.png'
import fifaLogo from '../../assets/fifa21logo.png'
import r6Logo from '../../assets/rainbowlogo.png'
import {Slide} from '@material-ui/core';
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
    padding: '2% 0',
    position: 'relative',
    maxWidth: 1440,
    display:'flex',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      width: '100%',
    },
  },
  line:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      justifyContent:'center',
    },
  },
  divImg: {
    width:'48.5%',
    position:'relative',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '&:hover': {
      transition:'0.1s  ease-in-out',
      transform:'scale(1.2)!important',
      
   },
   [theme.breakpoints.down("sm")]: {
    width:'100%',
    marginTop:'20%',
    marginBottom:'20%'
  
  },
  },
  img:{
    position: 'relative',
    top: 0,
    left: 0,
    height: 300,
    zIndex:2,
    [theme.breakpoints.down("sm")]: {
      margin: 15,
    
    },
   
  },
  animation:{
    position: 'absolute',
    top: '35%',
    left: '49%',
    right: 0,
    bottom: 0,
    width:'1%',
    height:'1%',
    borderRadius:"50%",
    zIndex:1,
    boxShadow:'0px 0px 150px 100px #e6007e ',
  
  },
  logo:{
    width:'45%',
    paddingTop:'5%'
  }

  
});
var slideDirection='down'
// eslint-disable-next-line 
if(screen.width<600){
  slideDirection='left'
}
function Game(props) {
  const { classes } = props;
  const [checkedGame, setCheckedGame] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('games'))){
     
      setCheckedGame(true)
      
    }
    
    
  
 })
 if(checkedGame){
  scrollbar.removeListener();
 }
  return (
    <section id='games'> 
    <div className={classes.root}>
    <div className={classes.div}>
    <div className={classes.line}>
    <Slide direction='right' timeout={2000} in={checkedGame}>
      <div className={classes.divImg}>
        <img src={fifa} alt="fifa" className={classes.img}/>
        <img src={fifaLogo} alt="fifaLogo" className={classes.logo}/> 
        <div className={classes.animation}></div>
      </div>
    </Slide>
    <Slide direction={slideDirection} timeout={2000} in={checkedGame}>
      <div className={classes.divImg}>
        <img src={callofduty} alt="callofduty" className={classes.img}/> 
        <img src={callofdutyLogo} alt="callofdutyLogo" className={classes.logo}/> 
        <div className={classes.animation}></div>
      </div>
    </Slide>
    <Slide direction='left' timeout={2000} in={checkedGame}>
      <div className={classes.divImg}>
        <img src={r6} alt="r6" className={classes.img}/> 
        <img src={r6Logo} alt="r6Logo" className={classes.logo}/> 
        <div className={classes.animation}></div>
      </div>
    </Slide>
    </div>
    </div>
    </div>
    </section> 
  );
}



export default withStyles(styles)(Game);
