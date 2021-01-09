import React from 'react';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/GoodGain-logo.png'
import control from '../../assets/Group-153.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
    top: 0,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'4% 0',
    flexDirection:'column',
    paddingBottom:2,
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      padding:'50px 0',
    },
  },
  container:{
    width:'80%',
    maxWidth: 1440,
    padding:'2% 0',
    display:'flex',
    
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      padding:'30px 0',
      width:'90%',
    },
    
  },
  divRight:{
    width: '64.833%',
    marginRight:'5.5%',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      marginBottom:30
    },
  },
  divLeft:{
    width: '29.6667%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
  buttons:{
    margin:0,
    padding:0,
    marginTop:-49,
    [theme.breakpoints.down("xs")]: {
      width:'110%'
    },
  },
  link:{
    color:'#fff',
    fontFamily:"'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontWeight:600,
    textDecoration:'none',
    fontSize:14,
    marginRight:20,
    
  },
  text:{
    fontFamily: "'Gilroy-medium',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 12,
    color: '#666',
    justifyContent:'center',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      width:'100%'
    }
  },
  '@font-face': {
    fontFamily: 'Gilroy-medium',
    src: `url(${GilroyMedium})`,
  },
  logo:{
    height:51,
    width:203
  },

  control:{
    width:36,
    height:41,
    cursor:'pointer',
    transform: 'translateY(-70px)',
    [theme.breakpoints.down("sm")]: {
      transform: 'translateY(-40px)',
    },
  },
  icon:{
    color:'#fff'
  },
  app:{
    height: 32,
    width: 32,
    borderRadius:3,
    backgroundColor:'#212121',
    marginRight:8,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer'
  },
  apps:{
    display:'flex',
    [theme.breakpoints.down("sm")]: {
      margin:'8% 0'
    },
  }
  
});
function scrollTop() {

  scroll.scrollToTop()

}
function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.divRight}>
        <div className={classes.buttons}>
          <a href='/terms' className={classes.link}>Termos de Uso</a>
          <a href='/policy' className={classes.link}>Política de Privacidade</a>
        </div>
        <div className={classes.text} style={{paddingTop: 50}}>
          A GoodGain não possui vínculos, afiliações ou relações com nenhum desenvolvedor de jogos ou consoles. Todo o conteúdo, título e artes são marcas comerciais com direitos autorais assegurados aos seus respectivos proprietários
        </div>
        </div>
        <div className={classes.divLeft}>
          <img src={logo} alt="logo" className={classes.logo}/>
        </div>
      </div>
      <div className={classes.container} style={{borderTop:'1px solid #666',justifyContent:'space-between',alignItems:'center'}}>
        <div className={classes.text}>
        <span>© 2021 Good Gain International - Feita por gamers para gamers! Todos os direitos reservados. </span>
        <span>ABN 392 066 387 22</span>
        </div>
        
        <div className={classes.apps}>
        <a href='https://www.facebook.com/goodgain.gg'  className={classes.app}><FacebookIcon  className={classes.icon}></FacebookIcon></a>
        <a href='https://www.instagram.com/goodgain.gg/' className={classes.app}><InstagramIcon  className={classes.icon}></InstagramIcon></a>
        <a href='https://www.youtube.com/channel/UCCOgt9WzKg13Onm6EJ3rbGA' className={classes.app}><YouTubeIcon  className={classes.icon}></YouTubeIcon></a>
        <a href='http://www.twitter.com/goodgaingg' className={classes.app}><TwitterIcon  className={classes.icon}></TwitterIcon></a>
        </div>
      </div>
      <img src={control} alt="control" onClick={scrollTop} className={classes.control}/>
    </div>
  );
}



export default withStyles(styles)(Footer);
