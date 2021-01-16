import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import brand from '../../assets/marcaLogo.png';
import loading from '../../assets/ampulheta.png';


const styles = (theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100vh',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  div:{
    width:'35%',
    
    [theme.breakpoints.down("sm")]: {
      width:'90%',
      
    },
    
  },
  content:{
    backgroundColor: '#e8e8e8',
    paddingTop: '1%',
    paddingRight: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },

  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  logo:{
    width:'30%',
    paddingBottom:'3%',
    [theme.breakpoints.down("sm")]: {
      width:'70%',
      
    },
  },
  brand:{
    width:'15%',
    padding:'3%'
  },
  titleBrand:{
    width:'100%',
    padding:'1% 0',
    display:'flex',
    alignItems:'center',
    marginLeft:'-3%'

  },
  title:{
    fontSize:20,
    fontWeight:600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
  },
  text:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:18,
    display:'flex',
    flexDirection:'column'
    
  },
  back:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    textDecoration:'none',

  },
  loading:{
    width:'10%',
    padding:'5% 0'
  }
});


function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>
        <div className={classes.titleBrand}><img src={brand}  alt="brand" className={classes.brand}/><span className={classes.title}> Bem-vindo a GG</span> </div>
        <div className={classes.text}><strong>Hey,</strong><span>em breve você poderá abrir sua conta na GoodGain também pelo site e começar a participar de campeonatos e amistosos diários com premiação em dinheiro. </span><span>Estamos chegando pra fazer história. <strong>Todo mundo no eSports!</strong></span></div>
        <img src={loading}  alt="loading" className={classes.loading}/> 
        <a href='/' className={classes.back}>Voltar</a>
      </div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Loading);
