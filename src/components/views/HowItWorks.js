import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import rectangle from '../../assets/Rectangle.png';
import item1 from '../../assets/image-3.png';
import item3 from '../../assets/image-1.png';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background1 from '../../assets/Group-155.png';
import background2 from '../../assets/Group-158.png';
import Scrollbar from 'smooth-scrollbar'
import {Grow} from '@material-ui/core';
var options={
  damping:0.01,
  speed:0.1,
  syncCallbacks: true,
  continuousScrolling:true
}
const styles = (theme) => ({
  root: {
    backgroundColor:'#212121',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    paddingTop:'5%',
    backgroundSize: 'initial',
    backgroundPosition: '0% 15%',
    backgroundImage: `url(${background1})`,
    backgroundRepeat: 'no-repeat'
  },
  root2: {
    backgroundColor:'#212121',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    backgroundSize: 'initial',
    backgroundPosition: 'top right',
    backgroundImage: `url(${background2})`,
    backgroundRepeat: 'no-repeat',
    paddingBottom:150,
  },
  how:{ 
  fontWeight: 600,
  fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
  fontSize: 40,
  color: '#ffffff',
  textAlign: 'center',
  margin:0
  },
  rectangle:{
    width:300
  },
  divTitle:{
    textAlign:'center'
  },
  divItem:{
    paddingTop:1,
    paddingBottom:1,
    marginTop:30,
    display:'flex',
    backgroundColor:'#515151',
    borderRadius:20,
    overflow:'hidden',
    maxWidth:1440,
    width:'80%',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
    },
  },
  itemText:{
    width:'30%',
    marginRight:'5.5%',
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    paddingTop: 70,
    paddingRight: 70,
    paddingBottom: 90,
    paddingLeft: 70,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 70,
      paddingRight: 30,
      paddingBottom: 50,
      paddingLeft: 30,
      marginRight:0,
      marginBottom:30,
      width:'100%',
    },
  },
  divItemImg:{
    width:'65%',
    [theme.breakpoints.down("sm")]: {
      width:'100%'
    }
  },
  itemImg:{
    paddingTop: 50,
    paddingRight: 70,
    paddingBottom: 50,
    paddingLeft: 40,
    marginTop: 15,
    transition: 'transform 300ms ease 0ms',
    textAlign: 'center',
    width:'100%',
    '&:hover': {
      transform:'scale(0.95)',
      
   },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingRight: 30,
      paddingBottom: 25,
      paddingLeft: 30,
      marginTop:0,
      marginBottom:0,
      marginRight:'auto',
      marginLeft:'auto',
      height:'auto'
    },
  },
  num:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize:60,
    color: '#ffffff',
    lineHeight:'0.53px',
    margin:0,
    fontWeight:'bold'
  },
  
  text:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 32,
    color: '#ffffff',
    paddingTop: 15,
    paddingBottom: 25,
    marginTop: 40,
    fontWeight:'normal'
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  divItemImg2:{
    width:'65%',
    marginRight:'5.5%',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      marginRight:0,
      marginTop:30
    }
  },
  itemText2:{
    marginRight:0,
    width:'30%',
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    paddingTop: 70,
    paddingRight: 70,
    paddingBottom: 90,
    paddingLeft: 70,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 70,
      paddingRight: 30,
      paddingBottom: 50,
      paddingLeft: 30,
      width:'100%',
    },
  },
});

var scrollbar=Scrollbar.init(document.getElementById('scroll'), options);

function HowItWorks(props) {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const { classes } = props;
 
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('howWorkOne'))){
     
      setCheckedOne(true)
      
    }
    if(scrollbar.isVisible(document.getElementById('howWorkTwo'))){
     
      setCheckedTwo(true)
      
    }
    if(scrollbar.isVisible(document.getElementById('howWorkThree'))){
     
      setCheckedThree(true)
      
    }
  
 })
 if(checkedOne){
  scrollbar.removeListener();
 }


  return (
    
    <section >
    <div className={classes.root}>
      <div className={classes.divTitle}>
      <h2 className={classes.how}>Como Funciona?</h2>
      <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
      </div>
      <Grow timeout={2000} id='howWorkOne' in={checkedOne}>
      <div  className={classes.divItem}>
        <div className={classes.itemText}>
          <h1 className={classes.num}>1</h1>
          <h3 className={classes.text}>
            <strong>Baixe</strong> o<br/>aplicativo e<br/><strong>crie sua</strong><br/><strong>conta</strong>
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item1} alt="item1" className={classes.itemImg}/>
        </div>
      </div>
      </Grow>
      </div>
      
      <div className={classes.root2}>
      <Grow timeout={2000} id='howWorkTwo' in={checkedTwo}>
      <div className={classes.divItem}>
      <div className={classes.divItemImg2}>
          <img src={item1} alt="item1" className={classes.itemImg}/>
        </div>
        <div className={classes.itemText2}>
          <h1 className={classes.num}>2</h1>
          <h3 className={classes.text}>
            <strong>Crie uma</strong><br/><strong>partida</strong> ou<br/><strong>desafie</strong> um<br/>oponente
          </h3>
        </div>
      </div>
      </Grow>
      <Grow timeout={2000} id='howWorkThree' in={checkedThree}>
      <div className={classes.divItem}>
        <div className={classes.itemText}>
          <h1 className={classes.num}>3</h1>
          <h3 className={classes.text}>
            <strong>Jogue</strong> a<br/>partida em<br/><strong>seu console</strong><br/>Xbox ou<br/>Ps4/Ps5
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item3} alt="item3" className={classes.itemImg}/>
        </div>
      </div>
      </Grow>
      </div>
    </section>
    
  );
}



export default withStyles(styles)(HowItWorks);
