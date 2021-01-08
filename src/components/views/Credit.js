import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import brand from '../../assets/marcaLogo.png';
import { Form } from '@unform/web';
import Input from '../Form/input';
import MoneyMask from '../Form/moneyMask';
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
    marginTop:'1%',
    marginBottom:'4%'
  },
  inputValidate:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    borderRadius: 25,
    border:'none',
    backgroundColor:'#fff',
    padding:16,
    width:'100%',
    marginTop:'1%',
    marginBottom:'4%',
    display:'flex',
    '& > div > input':{
      width:27,
      fontSize: 14,
      color: '#383838',
      border:'none'
    }
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
    margin:'5% 0'

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
  
  label:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:16,
    paddingLeft:'2%'
  },
 
  back:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    textDecoration:'none',
    
  },
  
});


function Login(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const [error, setError] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [stage, setStage] = React.useState(0);
  async function handleSubmit (data) {
    try{
      let stringAmount=amount
      let arrayAmount=amount.split('')
      let commaPosition=arrayAmount.indexOf(',')
      let amountLength=arrayAmount.length
      if(commaPosition!==-1){
        for(let i=0;i<3-(amountLength-commaPosition);i++){
          stringAmount=stringAmount+'0'
        }
      }
      stringAmount=stringAmount.replace("R$", "")
      stringAmount=stringAmount.replace(".", "")
      stringAmount=stringAmount.replace(",", "")
      stringAmount=parseInt(stringAmount)
      let objAmount={amount:{value:stringAmount,currency: "BRL"}}
      var obj=Object.assign({}, data, objAmount)
      console.log(obj)
      
    }catch(err){
      setError(true)
    }
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>

        <Form style={{position:'relative'}} ref={formRef} onSubmit={handleSubmit}>
          
          <label className={classes.label}>Valor</label>
          <MoneyMask required onChange={(val)=>setAmount(val.target.value)} type="text"  placeholder='Informe o valor que deseja adicionar.' className={classes.input}/>
          <label className={classes.label}>Número do cartão</label>
          <Input required name="card.number" onChange={(val)=>formRef.current.setFieldValue('card.number',val.target.value.replace(/\D/g, ''))} type="text" maxLength="16" placeholder='Informe o número do seu cartão de crédito' className={classes.input}/>
          <label className={classes.label}>Data de vencimento</label>
          <label htmlFor='month'  className={classes.inputValidate}><Input required name="card.exp_month" onChange={(val)=>formRef.current.setFieldValue('card.exp_month',val.target.value.replace(/\D/g, ''))} id='month' minLength="2" maxLength="2" type="text"  placeholder='MM' /><span>/</span><Input required name="card.exp_year" onChange={(val)=>formRef.current.setFieldValue('card.exp_year',val.target.value.replace(/\D/g, ''))} maxLength="2" type="text"  placeholder='YY' /></label>
          
          
          
          <button className={classes.btn} type="submit">Próximo passo</button>
        </Form>
        <a className={classes.back} href='/dashboard'>Voltar</a>
      </div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Login);
