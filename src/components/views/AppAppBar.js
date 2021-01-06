import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/GoodGain-logo.png'
import kingdom from '../../assets/united-kingdom.png'
import brazil from '../../assets/brazil.png'
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import ButtonMenu from '../components/ButtonMenu';
import { MenuItem } from '@material-ui/core';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function scrollHome() {
  scroller.scrollTo('home', {
    duration: 1500,
    delay: 100,
    smooth: true,
  })
}
function scrollHowWork() {
  scroller.scrollTo('HowWork', {
    duration: 1500,
    delay: 100,
    smooth: true,

  })

}
function scrollGames() {
  scroller.scrollTo('game', {
    duration: 1500,
    delay: 100,
    smooth: true,

  })
}
function scrollBenefits() {
  scroller.scrollTo('benefits', {
    duration: 1500,
    delay: 100,
    smooth: true,

  })
}
function scrollTransfer() {
  scroller.scrollTo('transfer', {
    duration: 1500,
    delay: 100,
    smooth: true,

  })
}
function scrollAbout() {
  scroller.scrollTo('about', {
  duration: 1500,
  delay: 100,
  smooth: true,

})
}
function scrollContact() {
  scroller.scrollTo('contact', {
    duration: 1500,
    delay: 100,
    smooth: true,
  
  })
}
const styles = (theme) => (
  {
  title: {
    fontSize: 24,
  },
  item: {
    cursor:'pointer',
    fontSize: 14,
    paddingBottom:8,
    lineHeight:'1em',
    fontWeight: 500,
    color:'#ffffff',
    textDecoration:'none',
    '&:hover': {
      color: "#e82d50",
   },
    fontFamily:"Gilroy-medium,Helvetica,Arial,Lucida,sans-serif",
    transition: 'color 300ms ease 0ms',
    paddingLeft:11,
    paddingRight:11,
    whiteSpace: 'nowrap',
    margin:0
  },
  '@font-face': {
    fontFamily: 'Gilroy-medium',
    src: `url(${GilroyMedium})`,
  },
 
 
  toolbar: {
    justifyContent: 'space-between',
  },
  left:{
    [theme.breakpoints.down("sm")]: {
      marginBottom:30
    },
    flex:1,
    display:'flex',
    justifyContent:'space-between'
  },
  center:{
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    flex: 1,
    display: 'flex',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  
  logo:{
    height:51,
  },
  button:{
    [theme.breakpoints.down("xs")]: {
      marginTop:5,
    },
    textDecoration:'none',
    marginBottom:8,
    borderWidth:0,
    borderRadius:25,
    fontSize: 16,
    fontWeight: 600,
    color:'#ffffff',
    fontFamily:"'Gilroy-Medium',Helvetica,Arial,Lucida,sans-serif",
    whiteSpace: 'nowrap',
    paddingTop: 8,
    paddingRight: 20,
    paddingBottom: 8,
    paddingLeft: 20,
    display:'inline-block',
    transition: 'all 300ms ease 0ms',
    boxShadow:'0px 2px 18px 0px rgba(0,0,0,0.3)',
    lineHeight: '1.7em',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    border: '2px solid',
    position:'relative',
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    '&:hover': {
      transform:'scale(0.9)',
      boxShadow:'0px 0px 20px 0px #e6007e ',
   },
  
  },
  login:{
    [theme.breakpoints.down("xs")]: {
      marginTop:5,
    },
    textDecoration:'none',
    marginBottom:8,
    borderWidth:0,
    borderRadius:25,
    fontSize: 16,
    fontWeight: 600,
    fontFamily:"'Gilroy-Medium',Helvetica,Arial,Lucida,sans-serif",
    whiteSpace: 'nowrap',
    paddingTop: 8,
    paddingRight: 20,
    paddingBottom: 8,
    paddingLeft: 20,
    display:'inline-block',
    lineHeight: '1.7em',
    position:'relative',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    '&:hover': {
      transform:'scale(0.9)',
   },
  
  },
  flag:{
    height:18,
    marginLeft:5,
    marginRight:5,
    cursor:'pointer'
  },
  divFlag:{
    [theme.breakpoints.down("xs")]: {
      display:'none',
    },
    paddingBottom:8,
    lineHeight:'1em',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  },
divFlag2:{
  lineHeight:'1em',
  display:'flex',
  justifyContent:'left',
  alignItems:'center',
  marginLeft:25,
  marginTop:10
},
appBar:{
  position:'fixed',
  [theme.breakpoints.down("xs")]: {
    position:'absolute',
  },
}
});


function AppAppBar(props) {
  const { classes } = props;
 
  
  return (
    <div>
      <AppBar id="fixed"  className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <img src={logo} alt="logo" className={classes.logo}/>
            
          </Link>
          <ButtonMenu>
          <MenuItem  onClick={scrollHome}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Inicio'}
          </Link>
          </MenuItem>
          <MenuItem onClick={scrollHowWork}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Como Funciona'}
            </Link>
          </MenuItem>
          <MenuItem onClick={scrollGames}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Jogos'}
            </Link>
          </MenuItem>
          <MenuItem onClick={scrollBenefits}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Vantagens'}
          </Link>
          </MenuItem>
          <MenuItem onClick={scrollTransfer}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Transferências'}
          </Link>
          </MenuItem>
          <MenuItem onClick={scrollAbout}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Sobre Nós'}
            </Link>
          </MenuItem>
          <MenuItem onClick={scrollContact}>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
          >
            {'Contato'}
            </Link>
          </MenuItem>
          
         
            <div className={classes.divFlag2} >
            <img src={kingdom} alt="kingdom" className={classes.flag}/>
            <img src={brazil} alt="brazil" className={classes.flag}/>
            </div>
        
            
            </ButtonMenu>
          </div>
          <div className={classes.center}>
          
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollHome}
          >
            {'Inicio'}
          </Link>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollHowWork}
          >
            {'Como Funciona'}
            </Link>
            <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollGames}
          >
            {'Jogos'}
            </Link>
            <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollBenefits}
          >
            {'Vantagens'}
          </Link>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollTransfer}
          >
            {'Transferências'}
          </Link>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollAbout}
          >
            {'Sobre Nós'}
          </Link>
          <Link
            to={{
              pathname: "/",
            }}
            className={classes.item}
            onClick={scrollContact}
          >
            {'Contato'}
            </Link>
          </div>
          <div className={classes.right}>
            <div className={classes.divFlag} >
            <img src={kingdom} alt="kingdom" className={classes.flag}/>
            <img src={brazil} alt="brazil" className={classes.flag}/>
            </div>
            <a
            
            className={classes.login}
            href="/login"
          >
            {'Entre'}
          </a>
          <a
            
            className={classes.button}
            href="/register"
          >
            {'Cadastre-se'}
          </a>
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

AppAppBar.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
