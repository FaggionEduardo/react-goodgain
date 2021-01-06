import React,{ useEffect, useRef }from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import { Form } from '@unform/web';
import Input from '../Form/input';
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
  
  title:{
    padding:'2% 0',
    fontSize:20,
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
    textAlign:'center'
  },
  back:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    textDecoration:'none',
    
  },
  finishTitle:{
    fontSize: 16,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    fontWeight:600,
    color: '#fff',
  },
  finishDiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    transform:'translatey(-100%)',
    height:'40%'
  }
});


function Forgot(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const [send, setSend] = React.useState('none');
  const [msgColor, setMsgColor] = React.useState('#41D886');
  const [msg, setMsg] = React.useState('Recuperação enviada!');
  async function handleSubmit (data) {
    try{
      await api.post(`/changelogin`, data)
      setSend('flex')
      setMsgColor('#41D886')
      setMsg('Recuperação enviada!')
    }catch(err){
      setSend('flex')
      setMsgColor('#D84141')
      setMsg('E-mail não cadastrado!')
    }
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>
        <div className={classes.title}>Esqueceu sua senha?</div>
        <div className={classes.subtitle}>Não se preocupe, vamos ajudar você.</div>
        <Form style={{position:'relative'}} ref={formRef} onSubmit={handleSubmit}>
          <Input required name="email" type="email"  placeholder='Informe seu e-mail cadastrado na GG' className={classes.input}/>
          
          <button className={classes.btn} type="submit">Enviar</button>
        </Form>
        
        <a className={classes.back} href='/login'>Voltar</a>
      </div>
      <div style={{backgroundColor:msgColor, display:send}} onClick={()=>setSend('none')} className={classes.finishDiv}><span className={classes.finishTitle}>{msg}</span></div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Forgot);
