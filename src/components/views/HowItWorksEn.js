import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import rectangle from '../../assets/Rectangle.png';
import item1 from '../../assets/image-1.jpg';
import item2 from '../../assets/image-2.jpg';
import item3 from '../../assets/image-3.jpg';
import item1M from '../../assets/image-1M.jpg';
import item2M from '../../assets/image-2M.jpg';
import item3M from '../../assets/image-3M.jpg';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background1 from '../../assets/Group-155.png';
import background2 from '../../assets/Group-158.png';
import Fade from 'react-reveal/Fade';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
    width:300,
    margin:'auto',
    [theme.breakpoints.down("sm")]: {
      width:200,
    },
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
      paddingTop: 0,
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
      display:'none',
      
    },
  },
  numMobile:{
    fontSize: 25,
    display:'none',
    [theme.breakpoints.down("sm")]: {
      display:'inline'
      
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
      display:'none'
    },
  },
  itemText2M:{
      paddingTop: 0,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      marginRight:0,
      marginBottom:10,
      backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
      minWidth:260,
      marginRight:0,
      width:'100%',
      display:'none',
      [theme.breakpoints.down("sm")]: {
        display:'block'
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


function HowItWorks(props) {
  const { classes } = props;
 



  return (
    
    <Element name="HowWork" >
    <div className={classes.root}>
      <div className={classes.divTitle}>
      <h2 className={classes.how}>How it Works?</h2>
      <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
      </div>
      <Fade >
      <div  className={classes.divItem}>
        <div className={classes.itemText}>
        <h1 className={classes.num}>1</h1>
          <h3 className={classes.text}>
          <strong><span className={classes.numMobile}>1.</span>	Sign Up for free </strong><span>and choose  </span><span>your favorite </span><span>game.</span>
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item1} alt="item1" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item1M} alt="item1M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
      </div>
      </Fade>
      </div>
      
      <div className={classes.root2}>
      <Fade >
      <div className={classes.divItem}>
      <div className={classes.itemText2M}>
          
          <h3 className={classes.text}>
          <strong className={classes.numMobile}>2.</strong><span>	Compete daily </span><span>in <strong>head-to-head matches </strong></span><span>and <strong>tournaments</strong>.</span>
          </h3>
        </div>
      <div className={classes.divItemImg2}>
          <img src={item2} alt="item2" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item2M} alt="item2M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
        <div className={classes.itemText2}>
          <h1 className={classes.num}>2</h1>
          <h3 className={classes.text}>
          <span>Compete daily in</span><span> <strong>head-to-head matches </strong></span><span>and <strong>tournaments</strong>.</span>
          </h3>
        </div>
      </div>
      </Fade>
      <Fade >
      <div className={classes.divItem}>
        <div className={classes.itemText}>
          <h1 className={classes.num}>3</h1>
          <h3 className={classes.text}>
          <strong className={classes.numMobile}>3.</strong><strong> Your victory is </strong><strong>worth money. </strong><span>Have fun and</span><span> profit with us! </span>
          </h3>
        </div>
        <div className={classes.divItemImg}>
          <img src={item3} alt="item3" className={`${classes.itemImg} ${classes.desktop}`}/>
          <img src={item3M} alt="item3M" className={`${classes.itemImg} ${classes.mobile}`}/>
        </div>
      </div>
      </Fade>
      </div>
    </Element>
    
  );
}



export default withStyles(styles)(HowItWorks);
