import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import xPlay from '../../assets/Group-74.png';
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
    marginTop: '-65px'
  },
  text:{
    width: '64.833%',
    marginRight: '5.5%',
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'left',
    fontWeight:600,
    marginBottom:30,
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      marginRight: 0,
      fontSize: 30,
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
    width: '64.833%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
  xPlay:{
    marginTop: -5,
    textAlign: 'right',
    height:'auto',
    width: '29.6667%',
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      width: '100%',
    },
  }
  
});

function Profit(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.text}>
      Lucre com suas habilidades
      <br/> 
      em jogos* como 
      <span className={classes.gradient}> Fifa </span> 
      e 
      <span className={classes.gradient}> Call of Duty. </span>
      </div>
      <div className={classes.game}>
          <div className={classes.textGame}>*Jogos disponíveis para consoles Xbox, PS4 e Ps5.</div>
          <div className={classes.xPlay}><img src={xPlay} alt="xPlay"></img> </div>
      </div>
    </div>
  );
}



export default withStyles(styles)(Profit);
