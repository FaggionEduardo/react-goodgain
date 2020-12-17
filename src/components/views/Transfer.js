import React from 'react';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import bank from '../../assets/bank.png';
import cards from '../../assets/cards.png'
import picpay from '../../assets/picpay.png'
import img from '../../assets/cellMonitor.png'
import {Grow} from '@material-ui/core';
import rectangle from '../../assets/Rectangle.png';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
    top: 0,
    zIndex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:150
  },
  rectangle:{
    width:300,
    margin:'auto',
    [theme.breakpoints.down("sm")]: {
      width:200,
    },

  },
  div:{
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    maxWidth: 1440,
    display:'flex',
    flexDirection:'column',
    padding: '1% 0',
    [theme.breakpoints.down("sm")]: {
    padding: '15px 0'
    },
  },
  title:{
    padding:0,
    margin:0,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color:'#fff',
    fontWeight:600,
    textAlign:'center',
    paddingBottom:10
  },
  gradient:{
    backgroundImage: 'linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
  },
  subTitle:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    paddingTop: '40px!important',
    paddingBottom: '0px!important',
    marginTop: '-22px!important',
    marginBottom: '0px!important',
    textAlign:'center',
    color:'#fff',
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      fontWeight:400,
    },
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  methods:{
    paddingTop: 0,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    backgroundColor: '#212121',
    overflow: 'hidden',
    borderWidth: 2,
    display:'flex',
    alignItems:'start',
    width:'40%',
    flexDirection:'column',
    alignItems:'start',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      paddingTop: 15,
      paddingRight: 10,
      paddingBottom: 15,
      paddingLeft: 10,

    },
  },
  img:{
    height:60,
    marginRight:10,
    [theme.breakpoints.down("sm")]: {
      display:'none'

    },
  },
  methodItem:{
    padding:0,
    margin:0,
    fontFamily: "'Gilroy-Regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 26,
    color:'#fff',
    textAlign:'left',
    display:'flex',
    marginBottom:'5%',
    marginTop:'5%',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      marginBottom:10,
      marginTop:10,
      fontSize: 20,

    },

  },
  obs:{
    width: '80%',
    margin: 'auto',
    position: 'relative',
    maxWidth: 1440,
    padding: '2% 0',
    fontFamily: "'Gilroy-Regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 16,
    textAlign:'center',
    color:'#fff',
    marginTop:-22,
    [theme.breakpoints.down("sm")]: {
      marginTop:-10,
    },
  },
  divItem:{
    marginTop:20,
    display:'flex',
    backgroundColor:'#515151',
    borderRadius:20,
    overflow:'hidden',
    maxWidth:1440,
    width:'80%',
    margin:'auto',
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      marginTop:10,
      flexDirection:'column',
      width:'95%'
    },
  },
  cellImg:{
    width:'60%',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
    },
  }
  
});

function Transfer(props) {
  const { classes } = props;
  const [checkedTransfer, setCheckedTransfer] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('transfer'))){
      setCheckedTransfer(true) 
    }
 })
 if(checkedTransfer){
  scrollbar.removeListener();
 }
  return (
    <div id='transfer' className={classes.root}>
      <div className={classes.div}>
      <h2 className={classes.title}>Meios de <span className={classes.gradient}>transferência</span></h2>
      <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
      <div className={classes.subTitle}>Faça seu primeiro depósito agora e transforme sua diversão em dinheiro no bolso.</div>
      </div>
      <Grow timeout={2000} in={checkedTransfer}>
        <div className={classes.divItem}>
          <div className={classes.methods}>
            <h2 className={classes.methodItem} style={{fontWeight:600, display:'block'}}>Abasteça <span className={classes.gradient}>sua carteira digital</span> utilizando:</h2>
            <div className={classes.methodItem}><img src={cards} alt="cards" className={classes.img}/> <strong> Cartão de Crédito*</strong></div>
            <div className={classes.methodItem}><img src={picpay} alt="picpay" className={classes.img}/> PicPay</div>
            <div className={classes.methodItem}><img src={bank} alt="bank" className={classes.img}/> Transferência Bancária</div>
          </div>
          <img src={img} alt="img" className={classes.cellImg}/>
        </div>
      
      </Grow>
      <div className={classes.obs}>*Transferências via cartão de crédito apenas através do site.</div>
    </div>
  );
}



export default withStyles(styles)(Transfer);
