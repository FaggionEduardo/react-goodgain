import React from 'react';
import PropTypes from 'prop-types';
import  { isWidthDown } from '@material-ui/core/withWidth';
import logo from '../../assets/GoodGain-logo.png'
import kingdom from '../../assets/united-kingdom.png'
import brazil from '../../assets/brazil.png'
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import ButtonMenu from '../components/ButtonMenu';
import { MenuItem } from '@material-ui/core';
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import Scrollbar from 'smooth-scrollbar';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)
function scrollHowWork() {

  scrollbar.scrollIntoView ( document.getElementById( 'howWork' ), {
    offsetTop:100,
    onlyScrollIfNeeded: true,
    
})

}
const styles = (theme) => ({
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
    [theme.breakpoints.down("xs")]: {
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
    height:51
  },
  button:{
    [theme.breakpoints.down("xs")]: {
      marginTop:5,
    },
    marginBottom:8,
    borderWidth:0,
    borderRadius:25,
    fontSize: 16,
    fontWeight: 600,
    color:'#ffffff',
    fontFamily:"'Gilroy-Medium',Helvetica,Arial,Lucida,sans-serif",
    whiteSpace: 'nowrap',
    paddingTop: 8,
    paddingRight: 50,
    paddingBottom: 8,
    paddingLeft: 50,
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
  if(isWidthDown('xs',props.theme.width)){
    console.log('a')
  }
  return (
    <div>
      <AppBar id="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
          <Link
           
            href="/"
          >
            <img src={logo} alt="logo" className={classes.logo}/>
            
          </Link>
          <ButtonMenu>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Inicio'}
          </Link>
          </MenuItem>
          <MenuItem>
          <p className={classes.item} onClick={scrollHowWork}>
            {'Como Funciona'}
            </p>
          </MenuItem>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Jogos'}
          </Link>
          </MenuItem>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Vantagens'}
          </Link>
          </MenuItem>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Transferências'}
          </Link>
          </MenuItem>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Sobre Nós'}
          </Link>
          </MenuItem>
          <MenuItem>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
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
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Inicio'}
          </Link>
          <p className={classes.item} onClick={scrollHowWork}>
            {'Como Funciona'}
            </p>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Jogos'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Vantagens'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Transferências'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Sobre Nós'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.item}
            href="/"
          >
            {'Contato'}
          </Link>
          </div>
          <div className={classes.right}>
            <div className={classes.divFlag} >
            <img src={kingdom} alt="kingdom" className={classes.flag}/>
            <img src={brazil} alt="brazil" className={classes.flag}/>
            </div>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.button}
            href="/"
          >
            {'Área do cliente'}
          </Link>
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
