import React,{ useEffect, useRef }from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import moneyIcon from '../../assets/money.svg';
import api from '../../services/api'
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
    padding: '5%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    flexDirection:'column',

  },
  input:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 14,
    borderRadius: 25,
    border:'none',
    color: '#383838',
    backgroundColor:'#fff',
    padding:16,
    width:'100%',
    marginTop:'2%',
    marginBottom:'2%'
  },
  btn:{
    color: '#fff',
    borderWidth: 0,
    borderRadius: 40,
    fontSize: 16,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    backgroundImage: "linear-gradient(180deg,#e6007e 0%,#e94834 100%)",
    padding: '0.8em 1em',
    lineHeight: '1.7em',
    width:'100%',
    fontWeight:600,
    margin:'2% 0',
    textAlign:'center',
    textDecoration:'none',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'

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
  
  title:{
    padding:'1% 0',
    fontSize:20,
    fontWeight:600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    textAlign:'center'
  },
  balance:{
    fontSize:40,
    fontWeight:600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    textAlign:'center'
  },
  subtitle:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:16,
    padding:'2% 0',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down("sm")]: {
      display:'block'
      
    },
  },
  subtitle2:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:15,
    padding:'2% 0',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    
  },
  quit:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    textDecoration:'none',
    cursor:'pointer'
    
  },
  money1:{
    transform:'translate(-30%,-15%)',

    
  },
  money2:{
    transform:'translate(-30%, 15%) rotate(180deg)',
    
    
  }
});


function Dashboard(props) {
  const { classes } = props;
  const personaldata=JSON.parse(localStorage.getItem('personaldata'))
  const [money,setMoney] = React.useState(personaldata.money);
  useEffect(async () => {
    let response=await api.post(`/checkmoneyxp`, {token:localStorage.getItem('token')})
    setMoney(response.data.money)
  });
  
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>
        <div className={classes.title}>Bem vindo, {personaldata.name}</div>
        <div className={classes.subtitle}><span>Aqui você pode recarregar sua carteira digital na GG </span><span>utilizando seu <strong>cartão de crédito</strong>, além de poder solicitar o saque </span><span>disponível na sua conta digital.</span></div>
        <div className={classes.subtitle2}><span>*Consulte <strong><a style={{color:'black'}} href="/">nosso app</a></strong> para outras formas de pagamento</span></div>
        <div className={classes.title} >Saldo</div>
        <div className={classes.balance}>{money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
        <a className={classes.btn} style={{backgroundColor:'#41D886', backgroundImage:'none'}} href="/credit"><img src={moneyIcon}  alt="money" className={classes.money1}/><span>Recarregar carteira</span></a>
          <a className={classes.btn} href="/withdraw"><img src={moneyIcon}  alt="money" className={classes.money2}/><span>Solicitar saque</span></a>
        
        <p className={classes.quit} onClick={()=>{
          localStorage.removeItem('personaldata')
          localStorage.removeItem('token')
          window.location.assign('/login')
        }} >Sair</p>
      </div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Dashboard);
