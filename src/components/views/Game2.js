import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import callofduty from '../../assets/callofduty.jpg'
import fifa from '../../assets/fifa.jpeg'
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
  divImg: {
    width:'48.5%',
    margin: 'auto',
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      width: '90%',
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
  img:{
    position: 'relative',
    top: 0,
    left: 0,
    padding: 7,
    height:'100%',
    width:'100%',
    borderRadius:'5%',
    [theme.breakpoints.down("sm")]: {
      padding: 15,
      borderRadius:'8%',
    },
   
  },
  animation:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e94834',
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
  text:{
    fontSize:22,
    color:'#fff',
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    transform: 'scale(0, 1)',
  }
  
});


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
    <Slide direction='right' timeout={2000} in={checkedGame}>
      <div className={classes.divImg}>
        <img src={fifa} alt="fifa" className={classes.img}/>
        <div className={classes.animation}><h2 className={classes.text}>Lucre enquanto joga</h2></div>
      </div>
    </Slide>
    <Slide direction='left' timeout={2000} in={checkedGame}>
      <div className={classes.divImg}>
        <img src={callofduty} alt="callofduty" className={classes.img}/> 
        <div className={classes.animation} style={{backgroundColor:'#e6007e'}}><h2 className={classes.text}>Receba em sua conta</h2></div>
      </div>
    </Slide>
    </div>
    </div>
    </section> 
  );
}



export default withStyles(styles)(Game);
