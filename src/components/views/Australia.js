import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco2.svg';
import c1 from '../../assets/Group-159.png';
import left from '../../assets/australiaLeft.png';
import right from '../../assets/australiaRight.png';
import center from '../../assets/australiaCenter.png';
import map from '../../assets/australiaMap.png';
import text from '../../assets/centerText.png';
import Fade from 'react-reveal/Fade';


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
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
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
  text:{
    width: '25%',

    display:'flex',
    justifyContent:'center',
    alignItems:'left',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      width:'80%'
    },
  },
  divCenter:{
    width: '45%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      width:'80%',
    },

},
    text2:{
      width: '25%',
      display:'flex',
      justifyContent:'flex-end',
      flexDirection:'column',
      [theme.breakpoints.down("sm")]: {
        width:'80%',
      },

  },
  imgTexts:{
    width:'100%'
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


function Download(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
    <div className={classes.background}>
      
    </div>
    
    <div className={classes.div}>
    <Fade>
      <div className={classes.c1}>
        <img src={c1} alt="c1" className={classes.c1}/>
      </div>
      <div className={classes.text}>
                <img src={left}  alt="left" className={classes.imgTexts}/>
          </div>
          <div className={`${classes.divCenter} ${classes.desktop}`}>
                <img src={center}  alt="center" className={classes.imgTexts}/>
          </div>
          <div className={`${classes.divCenter} ${classes.mobile}`}>
                <img src={map}  alt="map" className={classes.imgTexts}/>
                <img src={text}  alt="text" className={classes.imgTexts}/>
          </div>
          <div className={classes.text2}>
                <img src={right}  alt="right" className={classes.imgTexts}/>
          </div>
      </Fade>
    </div>
    </div>
  );
}



export default withStyles(styles)(Download);
