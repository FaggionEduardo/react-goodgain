import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import play from '../../assets/play.png';
import xbox from '../../assets/xbox.png';
import desk from '../../assets/desk.png';
import mobile from '../../assets/mobile.png';
import load from '../../assets/load.png';
const styles = (theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '2% 0',
    maxWidth: 1440,
    zIndex: 5,
    marginTop: '-65px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      width: '90%',
      
    },
  },
  text:{
    width: '100%',
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight:600,
    marginBottom:30,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      fontSize: 24,
    },
  },
  gradient:{
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)"
  },
  game:{
    paddingTop: 5,
    paddingBottom: 6,
    marginTop: -20,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontFamily: "'Gilroy-medium',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 16,
    marginBottom: 0, 
    color: '#C4C4C4',
    display:'flex',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
    },
  },
  '@font-face': {
    fontFamily: 'Gilroy-medium',
    src: `url(${GilroyMedium})`,
  },
  textGame:{
    width:200,
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
  xPlay:{
    marginTop: -5,
    textAlign: 'left',
    width:300,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
    },
  },
  img:{
    height:40,
    marginLeft:'5%',
  },
  loadText:{
    position:'absolute',
    transform: 'translatex(-41px) translatey(10px)',
    fontSize:'10px',
    color:'#fff'
  },
  load:{
      position:'absolute',
      transform: 'translatex(-41px) translatey(18px)',
      height:20,
      width:45
    
  }
});

function Profit(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.text}>
      Diversão
      <span className={classes.gradient}> + </span> 
      Desafio
      <span className={classes.gradient}> + </span>
      Dinheiro
      </div>

      <div className={classes.game}>
          <div className={classes.textGame}>Jogos disponíveis para:</div>
          <div className={classes.xPlay}><img className={classes.img} src={play} alt="play"/><img className={classes.img} src={xbox} alt="xbox"/><img className={classes.img} src={desk} alt="desk"/><img className={classes.img} src={mobile} style={{opacity:0.3}} alt="mobile"/><span className={classes.loadText}>Loading...</span><img className={classes.load} src={load} alt="load"/> </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Profit);
