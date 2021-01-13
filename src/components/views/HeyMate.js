import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco3.svg';
import appstore from '../../assets/appstore2.png';
import playstore from '../../assets/playstore2.png';
import center from '../../assets/heymateCenter.png';
import right from '../../assets/heymateRight.png';
import left from '../../assets/heymateLeft.png';
import Fade from 'react-reveal/Fade';


const styles = (theme) => ({
  root: {
    backgroundColor:'#212121',
    marginTop:'5%',
    [theme.breakpoints.down("sm")]: {
      marginTop:100,
    },
  },
  div:{
    marginTop:-170,
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
    justifyContent:'center',
    alignItems:'center',
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
  divLeft:{
    width: '25%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
    },
  },
  divCenter:{
    width: '45%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
      width:'95%',
    },

},
    divRight:{
      width: '25%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },

  },
  right:{
    [theme.breakpoints.down("sm")]: {
      width:'60%',
    },
  },
  left:{
    [theme.breakpoints.down("sm")]: {
      width:'60%',
    },
  },
  center:{
    width:'100%'
  },
});


function Start(props) {
  const { classes } = props;


  return (
    <div id="start" className={classes.root}>
    <div className={classes.background}>
      
    </div>
    <Fade>
    <div className={classes.div}>
          <div className={classes.divLeft}>
                <img src={left}  alt="left" className={classes.left}/>
          </div>
          <div className={classes.divCenter}>
                <img src={center}  alt="center" className={classes.center}/>
          </div>
          <div className={classes.divRight}>
                <img src={right}  alt="right" className={classes.right}/>
          </div>
      
    </div>
    </Fade>
    </div>
  );
}



export default withStyles(styles)(Start);
