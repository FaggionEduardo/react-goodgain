import React from 'react';
import PropTypes from 'prop-types';
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

function scrollHome() {
  scrollbar.scrollIntoView ( document.getElementById( 'home' ), {
    onlyScrollIfNeeded: true,
    
})
}
function scrollHowWork() {
  scrollbar.scrollIntoView ( document.getElementById( 'howWork' ), {
    onlyScrollIfNeeded: true,
    
})

}
function scrollGames() {
  scrollbar.scrollIntoView ( document.getElementById( 'games' ), {
    onlyScrollIfNeeded: true,
}) 
}
function scrollBenefits() {
  scrollbar.scrollIntoView ( document.getElementById( 'benefits' ), {
  onlyScrollIfNeeded: true,
}) 
}
function scrollTransfer() {
  scrollbar.scrollIntoView ( document.getElementById( 'transfer' ), {
  onlyScrollIfNeeded: true,
}) 
}
function scrollAbout() {
  scrollbar.scrollIntoView ( document.getElementById( 'about' ), {
  onlyScrollIfNeeded: true,
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
 
  scrollbar.addListener(function(status) { 
    var fixed=document.getElementById('fixed')
    // eslint-disable-next-line 
      if(screen.width>600){
         // eslint-disable-next-line 
        var offset = status.offset; 
        fixed.style.top = offset.y + 'px';
        fixed.style.left = offset.x + 'px';
      }
  });
  return (
    <div>
      <AppBar id="fixed"  className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
          <Link
           
            href="/"
          >
            <img src={logo} alt="logo" className={classes.logo}/>
            
          </Link>
          <ButtonMenu>
          <MenuItem  onClick={scrollHome}>
          <p className={classes.item}>
            {'Inicio'}
          </p>
          </MenuItem>
          <MenuItem onClick={scrollHowWork}>
          <p className={classes.item}>
            {'Como Funciona'}
            </p>
          </MenuItem>
          <MenuItem onClick={scrollGames}>
          <p className={classes.item} >
            {'Jogos'}
            </p>
          </MenuItem>
          <MenuItem onClick={scrollBenefits}>
          <p className={classes.item} >
            {'Vantagens'}
          </p>
          </MenuItem>
          <MenuItem onClick={scrollTransfer}>
          <p className={classes.item} >
            {'Transferências'}
          </p>
          </MenuItem>
          <MenuItem onClick={scrollAbout}>
          <p className={classes.item} >
            {'Sobre Nós'}
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
          <p className={classes.item} onClick={scrollHome}>
            {'Inicio'}
          </p>
          <p className={classes.item} onClick={scrollHowWork}>
            {'Como Funciona'}
            </p>
            <p className={classes.item} onClick={scrollGames}>
            {'Jogos'}
            </p>
            <p className={classes.item} onClick={scrollBenefits}>
            {'Vantagens'}
          </p>
          <p className={classes.item} onClick={scrollTransfer} >
            {'Transferências'}
          </p>
          <p className={classes.item} onClick={scrollAbout} >
            {'Sobre Nós'}
          </p>
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
