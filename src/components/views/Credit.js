import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import { Form } from '@unform/web';
import Input from '../Form/input';
import MoneyMask from '../Form/moneyMask';
import api from '../../services/api2'

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight:'100vh',
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
    fontSize: 14,
    display:'flex',
    alignItems:'center',
    '& > div > input':{
      width:38,
      textAlign:'center',
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
    padding: '0.8em 1em',
    lineHeight: '1.7em',
    width:'100%',
    fontWeight:600,
    margin:'5% 0',
    backgroundColor:'#41D886'

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
  approved:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:24,
    width:'100%',
  
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
    height:180,
    backgroundColor:'#D84141'
  }
  
});


function Credit(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const [error, setError] = React.useState('none');
  const [amount, setAmount] = React.useState('');
  const [stage, setStage] = React.useState(0);
  const [approved, setApproved] = React.useState(<span>Processando...</span>);
  const [response, setResponse] = React.useState('');
  const token=localStorage.getItem('token')
  const date=new Date()
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
      }else{
        stringAmount=stringAmount+',00'
      }
      var stringReal=stringAmount
      stringAmount=stringAmount.replace("R$", "")
      stringAmount=stringAmount.replace(".", "")
      stringAmount=stringAmount.replace(",", "")
      stringAmount=parseInt(stringAmount)
      let objAmount={amount:{value:stringAmount,currency: "BRL"}}
      var obj=Object.assign({}, data, objAmount)
      obj.payment_method.card.exp_year='20'+obj.payment_method.card.exp_year
      obj=Object.assign({}, obj, {reference_id: Math.trunc(Date.now()*Math.floor(Math.random() * 100)/Math.floor(Math.random() * 100)),description: "Compra de créditos",})
      obj.payment_method=Object.assign({}, obj.payment_method, {type: "CREDIT_CARD",installments: 1,capture: true,})
      setStage(1)
      let response=await api.post(`/pagseguro`, {pagseguro:obj, token:token})
      console.log(obj)
      console.log(response)
      if(response.data.status==false){
        setStage(0)
        setError('flex')
      }else{
        setApproved(<span style={{color:'#41D886', fontWeight:600}}>Pagamento aprovado!</span>)
        setResponse(
        <div className={classes.response}>
          <span className={classes.label}><strong>Cod. PagSeguro:</strong> {response.data.data.id}</span>
          <span className={classes.label}><strong>Ref:</strong> {response.data.data.reference_id}</span>
          <span className={classes.label}><strong>Descrição:</strong> {response.data.data.description}</span>
          <span className={classes.label}><strong>Titular:</strong> {response.data.data.payment_method.card.holder.name}</span>
          <span className={classes.label}><strong>Valor:</strong> {stringReal}</span>
          <span className={classes.label}><strong>Data:</strong> {((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear()}</span>
        </div>
        )
      }
      
    }catch(err){
      console.log(err)
      
      
    }
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.title}>Adicionar Crédito</div>
    <div className={classes.div}>
    
      <div className={classes.content}>
      {
          stage==0?
          <>
          <Form style={{position:'relative'}} ref={formRef} onSubmit={handleSubmit}>
          <label className={classes.label}>Valor</label>
          <MoneyMask required onChange={(val)=>setAmount(val.target.value)} type="text"  placeholder='Informe o valor que deseja adicionar' className={classes.input}/>
          <label className={classes.label}>Nome do titular</label>
          <Input required name="payment_method.card.holder.name" type="text"  placeholder='Informe o nome do titular' className={classes.input}/>
          <label className={classes.label}>Número do cartão</label>
          <Input required name="payment_method.card.number" onChange={(val)=>formRef.current.setFieldValue('payment_method.card.number',val.target.value.replace(/\D/g, ''))} type="text" maxLength="16" placeholder='Informe o número do seu cartão de crédito' className={classes.input}/>
          <label className={classes.label}>Data de vencimento</label>
          <label htmlFor='month'  className={classes.inputValidate}><Input required name="payment_method.card.exp_month" onChange={(val)=>{
             if (val.target.value.slice().length==1){
              formRef.current.setFieldValue('payment_method.card.exp_month', "0" +val.target.value.replace(/\D/g, ''))
            }else if(val.target.value.slice().length==3){
              formRef.current.setFieldValue('payment_method.card.exp_month', val.target.value.replace(/\D/g, '').substr(1))
            }else{
              formRef.current.setFieldValue('payment_method.card.exp_month', val.target.value.replace(/\D/g, ''))
            }
             }
          } id='month' type="text"  placeholder='MM' /><span>/</span><Input required name="payment_method.card.exp_year" onChange={(val)=>{
            if (val.target.value.slice().length==1){
             formRef.current.setFieldValue('payment_method.card.exp_year', "0" +val.target.value.replace(/\D/g, ''))
           }else if(val.target.value.slice().length==3){
             formRef.current.setFieldValue('payment_method.card.exp_year', val.target.value.replace(/\D/g, '').substr(1))
           }else{
             formRef.current.setFieldValue('payment_method.card.exp_year', val.target.value.replace(/\D/g, ''))
           }
            }
           } type="text"  placeholder='YY' /></label>
           <label className={classes.label}>Código de segurança</label>
          <Input required name="payment_method.card.security_code" onChange={(val)=>formRef.current.setFieldValue('payment_method.card.security_code',val.target.value.replace(/\D/g, ''))} type="text" maxLength="3" placeholder='Informe o CVV' className={classes.input}/>
          
          
          
          <button className={classes.btn} type="submit">Finalizar pagamento</button>
        </Form>
        <a className={classes.back} href='/dashboard'>Voltar</a>
        </>
        :
        ''
      }
      {
        stage==1?
        <>
        <p className={classes.approved}>{approved}</p>
        {response}
        <a className={classes.back} href='/dashboard'>Voltar</a>
        </>
        :
        ''
      }
        
      </div>
      <div style={{display:error}} onClick={()=>setError('none')} className={classes.finishDiv}><div className={classes.finishTitle}><span>Algo está errado! </span> <span> Pagamento não autorizado.</span> </div></div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Credit);
