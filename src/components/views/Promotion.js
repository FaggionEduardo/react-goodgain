import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import win from '../../assets/win.png';
import esquerda from '../../assets/esquerda.png';
import direita from '../../assets/direita.png';
import {Fade} from '@material-ui/core';
import appstore from '../../assets/appstore2.png';
import playstore from '../../assets/playstore2.png';
import Clear from '@material-ui/icons/Clear';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  background:{
    backgroundColor:'rgba(0,0,0,0.6)',
    height:'100%',
    width:'100%',
    position:'absolute',
    zIndex:2000
  },
  win:{
    width:'100%',
  },
  imgTexts:{
    width:'100%',
    paddingBottom:'10%'
  },
  div:{
    zIndex:2001,
    marginTop:'8%',
    width: '75%',
    margin: 'auto',
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    padding: '0 1%',
    position: 'relative',
    maxWidth: 1440,
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    paddingBottom:0,
    justifyContent:'space-between',
    alignItems:'space-between',
    [theme.breakpoints.down("xs")]: {
      flexDirection:'column',
      width: '80%',
    },
  },
  text:{
    width: '30%',

    display:'flex',
    justifyContent:'center',
    alignItems:'left',
    flexDirection:'column',
    [theme.breakpoints.down("xs")]: {
      margin: 'auto',
      width:'100%',
      paddingTop:20
    },
  },
  divWin:{
    width: '30%',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flexDirection:'column',
    [theme.breakpoints.down("xs")]: {
      margin: 'auto',
      width:'70%',
    },

},
    text2:{
      width: '30%',
      display:'flex',
      justifyContent:'flex-end',
      flexDirection:'column',
      [theme.breakpoints.down("xs")]: {
        margin: 'auto',
        width:'100%',
      },

  },
  app:{
    
    cursor:'pointer',
    width:'27%',
    height:'27%',

    marginRight:'2%',
  },
  apps:{
    display:'flex',
    position:'absolute',
    bottom:'8%',
    paddingLeft:'3%',
    [theme.breakpoints.down("xs")]: {
      bottom:'3%',
    },
  },
  close:{
    position:'absolute',
    color:'#fff',
    right:15,
    top:10,
    cursor:'pointer'
  }
  
});


function Promo(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(true);
  function close(){
    setOpen(false)
  }
  return ( 
    <Fade timeout={1000} in={open}>
      <div id='promo' className={classes.background} > 
        
        <div className={classes.div}>
          <Clear className={classes.close} onClick={close}/>
          <div className={classes.text}>
                <img src={esquerda}  alt="esquerda" className={classes.imgTexts}/>
          </div>
          <div className={classes.divWin}>
                <img src={win}  alt="win" className={classes.win}/>
          </div>
          <div className={classes.text2}>
                <img src={direita}  alt="direita" className={classes.imgTexts}/>
                <div className={classes.apps}>
                  <img src={appstore}  alt="appstore" className={classes.app}/>   
                  <img src={playstore}  alt="playstore" className={classes.app}/> 
                </div>
          </div>
        </div>
      </div>
      </Fade>
  );
}



export default withStyles(styles)(Promo);
