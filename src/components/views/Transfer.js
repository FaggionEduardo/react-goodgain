import React from 'react';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import bank from '../../assets/bank.png';
import cards from '../../assets/cards.png'
import picpay from '../../assets/picpay.png'
import {Grow} from '@material-ui/core';
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
    padding: '2% 0'
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
    paddingBottom: '40px!important',
    marginTop: '-22px!important',
    marginBottom: '0px!important',
    textAlign:'center',
    color:'#fff'
  },
  subTitle2:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    textAlign:'center',
    color:'#fff',
    marginTop: '-22px!important',
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  methods:{
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#212121',
    borderRadius: '10px 10px 10px 10px',
    overflow: 'hidden',
    borderWidth: 2,
    maxWidth: 1000,
    display:'flex',
    justifyContent:'space-between',
    width:'80%',
    border:'0 solid #e6007e',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      width:'95%',
      paddingTop: 15,
      paddingRight: 10,
      paddingBottom: 15,
      paddingLeft: 10,
    },
  },
  img:{
    height:40,
    marginRight:10
  },
  methodItem:{
    padding:0,
    margin:0,
    fontFamily: "'Gilroy-Regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    color:'#fff',
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      marginBottom:30
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
      <div className={classes.subTitle}><strong>Faça seu primeiro depósito agora e transforme sua diversão em dinheiro no bolso.</strong></div>
      <div className={classes.subTitle2}>Abasteça sua carteira digital utilizando:</div>
      </div>
      <Grow timeout={2000} in={checkedTransfer}>
      <div className={classes.methods}>
        <div className={classes.methodItem}><img src={cards} alt="cards" className={classes.img}/> <strong> Cartão de Crédito*</strong></div>
        <div className={classes.methodItem}><img src={picpay} alt="picpay" className={classes.img}/> PicPay</div>
        <div className={classes.methodItem}><img src={bank} alt="bank" className={classes.img}/> Transferência Bancária</div>
      </div>
      </Grow>
      <div className={classes.obs}>*Para transferências via Cartão de Crédito, acessar a área do cliente.</div>
    </div>
  );
}



export default withStyles(styles)(Transfer);
