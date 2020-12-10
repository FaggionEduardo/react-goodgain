import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import rectangle from '../../assets/Rectangle.png';
import item1 from '../../assets/image-1.jpeg';
import item2 from '../../assets/image-2.jpeg';
import item3 from '../../assets/image-3.jpeg';
import item1M from '../../assets/image-1M.jpeg';
import item2M from '../../assets/image-2M.jpeg';
import item3M from '../../assets/image-3M.jpeg';
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
    marginRight:'4.5%',
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 40,
    minWidth:260,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      marginRight:0,
      marginBottom:10,
      width:'100%',
    },
  },
  divItemImg:{
    width:'65%',
    paddingTop: '1%',
    paddingRight: '2.5%',
    paddingBottom: '1%',
    paddingLeft: '2.5%',
    display:'flex',
    justifyContent:'flex-start',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      display:'block'
    }
  },
  itemImg:{
    
    transition: 'transform 300ms ease 0ms',
    textAlign: 'center',
    width:'95%',
    
    '&:hover': {
      transform:'scale(0.95)',
      
   },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingRight: 10,
      paddingBottom: 15,
      paddingLeft: 10,
      marginTop:0,
      marginBottom:0,
      marginRight:'auto',
      marginLeft:'auto',
      height:'auto',
      width:'100%',
    },
  },
  num:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize:50,
    color: '#ffffff',
    lineHeight:'0.53px',
    margin:0,
    fontWeight:'bold',
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      
    },
  },
  
  text:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 30,
    color: '#ffffff',
    paddingTop: 15,
    paddingBottom: 25,
    marginTop: 40,
    fontWeight:'normal',
    display:'flex',
    flexDirection:'column',
    minWidth:220,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 10,
      marginBottom:0,
      display:'block'
    },
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  divItemImg2:{
    width:'65%',
    marginRight:'5.5%',
    paddingTop: '2%',
    paddingRight: '2.5%',
    paddingBottom: '2%',
    paddingLeft: '2.5%',
    display:'flex',
    justifyContent:'flex-end',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      marginRight:0,
      marginTop:30,
      display:'block'
    }
  },
  itemText2:{
    width:'30%',
    margin:0,
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 40,
    minWidth:260,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      marginRight:0,
      
      width:'100%',
    },
  },
  desktop:{
    display:'none',
    [theme.breakpoints.up("sm")]: {
      
      display:'block',
    },
  },
  mobile:{
      display:'block',
    [theme.breakpoints.up("sm")]: {
      display:'none'
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
    
    <section id="howWork" >
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
          <strong>Crie sua conta </strong><span>e escolha </span><span>seu jogo </span><span>favorito.</span>
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item1} alt="item1" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item1M} alt="item1M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
      </div>
      </Grow>
      </div>
      
      <div className={classes.root2}>
      <Grow timeout={2000} id='howWorkTwo' in={checkedTwo}>
      <div className={classes.divItem}>
      <div className={classes.divItemImg2}>
          <img src={item2} alt="item2" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item2M} alt="item2M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
        <div className={classes.itemText2}>
          <h1 className={classes.num}>2</h1>
          <h3 className={classes.text}>
            <span>Dispute  </span><span><strong>campeonatos </strong>e </span><strong>amistosos </strong><span>diários.</span>
          </h3>
        </div>
      </div>
      </Grow>
      <Grow timeout={2000} id='howWorkThree' in={checkedThree}>
      <div className={classes.divItem}>
        <div className={classes.itemText}>
          <h1 className={classes.num}>3</h1>
          <h3 className={classes.text}>
          <strong>Sua vitória </strong><strong>vale dinheiro. </strong><span>Divirta-se </span><span>e lucre! </span>
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item3} alt="item3" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item3M} alt="item3M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
      </div>
      </Grow>
      </div>
    </section>
    
  );
}



export default withStyles(styles)(HowItWorks);
