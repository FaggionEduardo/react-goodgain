import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import cam from '../../assets/cam.png';
import bradesco from '../../assets/bradesco.png';
import itau from '../../assets/itau.png';
import nubank from '../../assets/nubank.png';
import picpay from '../../assets/picpayLogo.png';
import pix from '../../assets/pix.png';
import check from '../../assets/check.png';
import clock from '../../assets/clock.png';
import error from '../../assets/error.png';
import { Form } from '@unform/web';
import Input from '../Form/input';
import Select from '../Form/select';
import File from '../Form/file';
import MoneyMask from '../Form/moneyMask';
import api from '../../services/api'

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight:'100vh',
    height:'100%',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  div:{
    width:'35%',
    marginBottom:'10%',
    position:'relative',
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
    height:'100%'

  },
  
  btn:{
    color: '#fff',
    borderWidth: 0,
    borderRadius: 40,
    fontSize: 16,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    padding: '0.8em 1em',
    lineHeight: '1.7em',
    width:'100%',
    fontWeight:600,
    margin:'5% 0',
    backgroundImage: "linear-gradient(180deg,#e6007e 0%,#e94834 100%)",
    textDecoration:'none',
    textAlign:'center'

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
    cursor:'pointer'
  },
  title:{
    display:'flex',
    fontSize:22,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#fff',
    width:'35%',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'1% 0',
    paddingLeft:15,
    [theme.breakpoints.down("sm")]: {
      width:'90%',
      
    },

  },
 
  response:{
    display:'flex',
    flexDirection:'column',
    width:'100%'
  },
  finishTitle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 16,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    fontWeight:600,
    color: '#fff',
    flexDirection:'column'
    
  },
  finishDiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    transform:'translatey(-100%)',
    backgroundColor:'#D84141',
    position:'absolute',
    width:'100%'
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
    marginBottom:'4%',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    display:'flex',
    alignItems:'flex-end'
    
    
  },
  divSelect:{
    position: 'relative',  
    '&:after': {
      content: "'\\f078'",
      font: 'normal normal normal 17px/1 FontAwesome',
      color: '#383838',
      right: 21,
      top: 4,
      height: 34,
      padding: '15px 0px 0px 8px',
      position: 'absolute',
      pointerEvents: 'none'
    }
  },
  firstTitle:{
    width:'100%',
    textAlign:'center',
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    fontSize:20,
    fontWeight:600,
    padding:'10px 0'
  },
  divBalance:{
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'#EDF1F7',
    borderRadius: 25,
    padding:'10px 20px'
  },
  balance:{
    fontSize:26,
    fontWeight:600,
    color:'#41D886',
    padding:'4% 0'
  },
  cam:{
    marginRight:10
  },
  textFile:{
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  lastTitle:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    fontSize:24,
    fontWeight:600,
    width:'100%',
    textAlign:'center',
    padding:'10px 0'
  },
  response:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    fontSize:24,
    fontWeight:600,
    width:'100%',
    textAlign:'center',
    padding:'10px 0'
  },
  bankContainer:{
    padding:10,
    borderRadius:25,
    display:'flex',
    justifyContent:'center',
    border:'1px solid #A9A9A9',
    marginTop:50,
    marginBottom:10,
  },
  datas:{
    paddingTop:20,
    margin:'0 2%'
  },
  datasTitle:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    fontSize:16,
    fontWeight:600,
    padding:'10px 0'
  },
  description:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    fontSize:14,
  },
  data:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    fontSize:18,
    fontWeight:600
  },
  divData:{
    display:'flex',
    flexDirection:'column',
    marginTop:10
  },
  bank:{
    height:70
  },
  lastIcon:{
    width:100,
    height:100,
    margin:'auto'
  }
  
  
});


function Withdraw(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const personaldata=JSON.parse(localStorage.getItem('personaldata'))
  const [money,setMoney] = React.useState(personaldata.money);
  const [req, setReq] = React.useState({});
  const [base64, setBase64] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [responseText, setResponseText] = React.useState('');
  const [responseColor, setResponseColor] = React.useState('#E6007E');
  const [icon, setIcon] = React.useState(clock);
  const [stage, setStage] = React.useState(0);
  const [bank, setBank] = React.useState('');
  const [transferData, setTransferData] = React.useState('');
  const [inputs, setInputs] = React.useState(<>
    <label className={classes.label}>Agência</label>
    <Input required name="agency" onChange={(val)=>formRef.current.setFieldValue('agency',val.target.value.replace(/\D/g, ''))} type="text" maxLength="4" placeholder='Informe o número da sua agência bancária' className={classes.input}/>
    <label className={classes.label}>Conta</label>
    <Input required name="account" onChange={(val)=>formRef.current.setFieldValue('account',val.target.value.replace(/\D/g, ''))} type="text"  placeholder='Informe o número da sua conta bancária' className={classes.input}/>
    </>);
  const token=localStorage.getItem('token')
  const banks={
    bradesco:bradesco,
    itau:itau,
    nubank:nubank,
    picpay:picpay,
    pix:pix,
  }
  useEffect(async () => {
    let response=await api.post(`/checkmoneyxp`, {token:localStorage.getItem('token')})
    setMoney(response.data.money)
  });
  async function confirm(){
    setStage(2)
    let response=await api.post(`/updocument`, {token:localStorage.getItem('token'), docbase64:base64})
    if(response.status==200){
      let response2=await api.post(`/mycash`, req)
      if(response2.statusText=='OK'){
        setResponse('Saque solicitado.')
        setResponseText(<span>O saque no valor de <strong>{amount}</strong> já está em processamento e em até 3 dias úteis estará na sua conta.</span>)
        setIcon(check)
        setResponseColor('#41D886')
        
      }else{
        let d = new Date(response2.data.last_date); 
        d.setDate(d.getDate() + 7);
        setResponse('Você já realizou um saque essa semana.')
        setResponseText(<span>O limite de saques é de 1 por semana, você poderá realizar outro saque no dia {(d.getDate()) + "/" + ((d.getMonth() + 1)) + "/" + d.getFullYear()}.</span>)
        setIcon(clock)
        setResponseColor('#E6007E')
      }
    }else{
      setResponse('Erro ao sacar')
      setResponseText(<span>Houve um erro no envio do seu documento CPF, tente novamente.</span>)
      setIcon(error)
      setResponseColor('#E6007E')
    }
    
    

  }
  function changeBank(){
    if(formRef.current.getFieldValue('bank')=='picpay'){
      setInputs(<>
        <label className={classes.label}>Conta</label>
        <Input required name="account" onChange={(val)=>formRef.current.setFieldValue('account','@'+val.target.value.replace('@',''))} type="text"  placeholder='Informe o número da sua conta PicPay' className={classes.input}/>
        </>)
    }else if(formRef.current.getFieldValue('bank')=='pix'){
      setInputs(<>
        <label className={classes.label}>Chave</label>
        <Input required name="account" type="text"  placeholder='Informe a sua chave Pix' className={classes.input}/>
        </>)
    }else{
      setInputs(<>
        <label className={classes.label}>Agência</label>
        <Input required name="agency" onChange={(val)=>formRef.current.setFieldValue('agency',val.target.value.replace(/\D/g, ''))} type="text" maxLength="4" placeholder='Informe o número da sua agência bancária' className={classes.input}/>
        <label className={classes.label}>Conta</label>
        <Input required name="account" onChange={(val)=>formRef.current.setFieldValue('account',val.target.value.replace(/\D/g, ''))} type="text"  placeholder='Informe o número da sua conta bancária' className={classes.input}/>
        </>)
    }
  }
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
  async function handleSubmit (data) {
      let stringAmount=amount
      let arrayAmount=amount.split('')
      let commaPosition=arrayAmount.indexOf(',')
      let amountLength=arrayAmount.length
      if(commaPosition!==-1){
        for(let i=0;i<3-(amountLength-commaPosition);i++){
          stringAmount=stringAmount+'0'
        }
      }else{
        stringAmount=stringAmount+',00'
      }   
      stringAmount=stringAmount.replace("R$", "")
      stringAmount=stringAmount.replace(/\./g, "")
      stringAmount=stringAmount.replace(",", ".")
      stringAmount=parseFloat(stringAmount)
      
      var obj={
      token:token,
      value:stringAmount,
      bank:{
        [data.bank]:{
          account:data.account 
        }
      } 
    }
    if(data.bank!=='pix' && data.bank!=='picpay'){
      obj.bank[data.bank].agency=data.agency
      setTransferData(<div className={classes.divData}>
      <span className={classes.description}>Titular</span>
      <span className={classes.data}>{personaldata.name}</span>
      <span className={classes.description}>Agência</span>
      <span className={classes.data}>{data.agency}</span>
      <span className={classes.description}>Conta corrente</span>
      <span className={classes.data}>{data.account}</span>
      <span className={classes.description}>CPF</span>
      <span className={classes.data}>{personaldata.cpf.substr(0, 3)+'.'+personaldata.cpf.substr(3, 3)+'.'+personaldata.cpf.substr(6, 3)+'-'+personaldata.cpf.substr(9, 3)}</span>
      </div>) 
    }
    if(data.bank=='pix'){
      setTransferData(<div className={classes.divData}>
        <span className={classes.description}>Chave PIX</span>
        <span className={classes.data}>{data.account}</span>
        </div>)
    }
    if(data.bank=='picpay'){
      setTransferData(<div className={classes.divData}>
        <span className={classes.description}>Conta PicPay</span>
        <span className={classes.data}>{data.account}</span>
        </div>)
    }
    var base64=await toBase64(data.cpf)
    setReq(obj)
    setBase64(base64)
    setBank(data.bank)
    setStage(1)
    
    
    
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
  
    <div className={classes.title}>Realizar saque</div>
    <div className={classes.div}>
    
      <div className={classes.content}>
      {
          stage==0?
          <>
          <div className={classes.divBalance}><span className={classes.titleBalance}>Saldo atual</span><span className={classes.balance}>{money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></div>
          <span className={classes.firstTitle}>Informe seus dados bancários.</span>
          <Form style={{position:'relative', display:'flex', flexDirection:'column'}} ref={formRef} onSubmit={handleSubmit}>
          <label className={classes.label}>Banco</label>
          <div className={classes.divSelect}>
          <Select required defaultValue='' name='bank' style={{paddingRight:50}} onChange={()=>changeBank()} className={classes.input}>
            <option value='' disabled>Selecione</option>
            <option value='bradesco'>Bradesco</option>
            <option value='itau'>Itaú</option>
            <option value='nubank'>Nubank</option>
            <option value='picpay'>PicPay</option>
            <option value='pix'>Pix</option>
          </Select>
          </div>
          {inputs}
          <label className={classes.label}>Valor a sacar</label>
          <MoneyMask required onChange={(val)=>setAmount(val.target.value)} type="text"  placeholder='Informe o valor que deseja sacar' className={classes.input}/>
          <label className={classes.label}>Foto do documento com CPF</label>
          <label htmlFor='cpf' className={classes.input}><img src={cam}  alt="cam" className={classes.cam}/><span className={classes.textFile}>Envie uma foto de seu documento</span></label>
          <File required style={{width:1,height:1,transform:'translate(20px,-20px)'}} name='cpf' id='cpf'/>
          <button className={classes.btn} type="submit">Próximo passo</button>
        </Form>
        <a className={classes.back} href='/dashboard'>Voltar</a>
        </>
        :
        ''
      }
      {
        stage==1?
        <>
        <span className={classes.lastTitle}>Realizar saque</span>
        <span className={classes.firstTitle}>Confira se as informações abaixo estão corretas.</span>
        <div className={classes.bankContainer}><img src={banks[bank]}  alt="bank" className={classes.bank}/></div>
        <div className={classes.datas}>
        <span className={classes.datasTitle}>Dados para transferência</span>
        {transferData}
        </div>
        <button className={classes.btn} onClick={confirm}>Confirmar e concluir</button>
        <span className={classes.back} onClick={()=>setStage(0)}>Voltar</span>
        </>
        :
        ''
      }
      {
        stage==2?
        <>
        <img src={icon}  alt="icon" className={classes.lastIcon}/>
        <span style={{color:responseColor}} className={classes.response}>{response}</span>
        <span style={{fontWeight:400}} className={classes.firstTitle}>{responseText}</span>
        
        
        
        <a href="/dashboard" className={classes.btn}>Ir para início</a>
       
        </>
        :
        ''
      }
      
      </div>
      
    </div>
    </div>
  );
}



export default withStyles(styles)(Withdraw);
