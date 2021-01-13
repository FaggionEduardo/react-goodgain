import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyLight from '../../assets/Gilroy-Light.ttf';
import floatControl from '../../assets/floatControl.jpg';
import bros from '../../assets/bros.jpg';
import background from '../../assets/Group-166.png';
import c1 from '../../assets/Group-162.png';
import c2 from '../../assets/Group-165.png';
import Fade from 'react-reveal/Fade';
import rectangle from '../../assets/Rectangle.png';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const styles = (theme) => ({
  root: {
    top: 0,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#212121',
    flexDirection:'column'
  },
  div:{
    width: '80%',
    margin: 'auto',
    height:'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '2% 0',
    position: 'relative',
    maxWidth: 1440,
    display:'flex',
    marginTop:40,
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',

    },
  },
  containerItem: {
    display: 'flex',
    flexDirection:'column',
    width: '47.25%',
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      width: '100%',
      marginBottom:'60px'
    },
    
    position:'relative',
    padding:0
  },
  containerImg:{
    width: '47.25%',
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      height:250,
      width: '100%',
      
    },
  },
  title:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign:'center',
    padding:0,
    margin:0,
    fontWeight:600
  },
  gradient:{
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    display:'inline',
    backgroundSize:'300%',
    [theme.breakpoints.down("sm")]: {
      display:'block',
      
    },
  },
  text:{
    fontFamily: "'Gilroy-light',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    paddingTop: 25,
    marginTop: 0,
    marginBottom: 0,
    color:'#fff',
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      
    },
    
  },
  '@font-face': {
    fontFamily: 'Gilroy-light',
    src: `url(${GilroyLight})`,
  },
  content:{
    paddingBottom:'1em',
    margin:0
  },
  divImg:{
    willChange: 'transform',
    animation: '$leftRightImage 3s alternate infinite ease-in-out',
    maxWidth:'100%',
    maxHeight:'100%',
    height:'100%',
    width:'100%',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s',
    left:'10%',
    [theme.breakpoints.down("sm")]: {
      left:'4%',
      maxHeight:250,
    },
  },
  "@keyframes leftRightImage": {
    "0%": {
      transform: 'translatex(-4%)'
      
    },
    
    "100%": {
      transform: 'translatex(4%)'
    }
  },
  divImg2:{
    willChange: 'transform',
    animation: '$leftRightImage2 3s alternate infinite ease-in-out',
    maxWidth:'100%',
    maxHeight:'100%',
    height:'100%',
    width:'100%',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s',
    left:'5%',
    [theme.breakpoints.down("sm")]: {
      left:'4%',
      maxHeight:250,
    },
  },
  "@keyframes leftRightImage2": {
    "0%": {
      transform: 'translatex(4%)'
      
    },
    
    "100%": {
      transform: 'translatex(-4%)'
    }
  },
  img:{
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:'5%'
  },
  img3:{
    maxWidth:'100%',
    maxHeight:'100%',
  },
  divImg3:{
    willChange: 'transform',
    animation: '$leftRightImage3 3s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '3s',
    animationDelay: '-3s',
    height:75,
    width:75,
  },
  "@keyframes leftRightImage3": {
    "0%": {
      transform: 'translatex(20%)'
      
    },
    
    "100%": {
      transform: 'translatex(-20%)'
    }
  },
  rectangle:{
    width:300,
    margin:'auto',

    [theme.breakpoints.down("sm")]: {
      width:200,
    },
  },

});

function About(props) {
  const { classes } = props;
  return (
    <Element name="about" >
    <div style={{backgroundImage: `url(${background})`, backgroundPosition:'center left', backgroundSize:'initial', backgroundRepeat:'no-repeat'}} className={classes.root}>
      <div className={classes.div}>
        <div className={classes.containerItem} style={{marginRight: '5.5%',}}>
          <p className={classes.title}>About <span className={classes.gradient}>GoodGain</span></p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <div className={classes.text}>
            <p className={classes.content}>GoodGain is a proudly <strong>company made by gamers.</strong></p>
            <p className={classes.content}>We <strong>turn</strong> players' skills into profit, providing fun, adrenaline and<strong> cash in the pocket.</strong></p>
            <p className={classes.content}>Our <strong>mission is to facilitate the access of all players to eSports</strong>, including more and more people, regardless of the level of play. Our goal is to be the biggest global reference in online amateur championship.</p>
          </div>
        </div>
        <Fade>
        <div className={classes.containerImg}>
          <div className={classes.divImg}>
          <img src={floatControl} alt="floatControl" className={classes.img}/>
          </div>
          <div className={classes.divImg3} style={{left:'75%',top:'-5%'}}>
          <img src={c1} alt="c1" className={classes.img3}/>
          </div>
          <div className={classes.divImg3} style={{left:'10%',top:'90%'}}>
          <img src={c2} alt="c2" className={classes.img3} />
          </div>
        </div>
        </Fade>
      </div>
      <div className={classes.div}>
      <Fade>
        <div style={{marginRight: '5.5%',}} className={classes.containerImg}>
          <div className={classes.divImg2}>
          <img src={bros} alt="bros" className={classes.img}/>
          </div>
        </div>
        </Fade>
        <div className={classes.containerItem} >
          <div className={classes.text}>
            <p className={classes.content}>Ethics, transparency in actions, equality, respect for the user and updated technology are non-negotiable values to deliver the <strong>best and most profitable experience to players.</strong></p>
            <p className={classes.content}>Our competitions include single matches and daily tournaments with cash prizes.</p>
            <p className={classes.content} style={{fontWeight:600, fontFamily:"'Gilroy',Helvetica,Arial,Lucida,sans-serif"}}><span  className={classes.gradient}>We are passionate about games and, of course, competing and winning! Join us.</span></p>
          </div>
        </div>
      </div>

    </div>
    </Element>
  );
}



export default withStyles(styles)(About);
