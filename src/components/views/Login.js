import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import brand from '../../assets/marcaLogo.png';
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
    paddingTop: '1%',
    paddingRight: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
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
  titleBrand:{
   
    padding:'1% 0',
    display:'flex',
    alignItems:'center',
    marginLeft:'-3%'

  },
  title:{
    fontSize:20,
    fontWeight:600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
  },
  label:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:16,
    paddingLeft:'2%'
  },
  forgotDiv:{
    width:'100%',
    textAlign:'right',
  },
  forgot:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    textDecoration:'none'
  },
  errorDiv:{
    width:'100%',
    textAlign:'left',
    transform:'translatey(-100%)',
    margin:0,
    position:'absolute',
    width:'100%'
  },
  error:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#D84141',
    fontSize:14,
    textDecoration:'none',
    margin:0,
    fontWeight:600
  },
  singIn:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    
  },
  singInLink:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    textDecoration:'none',
    fontWeight:600
  }
});


function Login(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const [error, setError] = React.useState(false);
  async function handleSubmit (data) {
    try{
      console.log(data)
      let response=await api.post(`/login`, data)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('personaldata',  JSON.stringify(response.data.personaldata))
      window.location.assign('/dashboard')
    }catch(err){
      setError(true)
    }
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>
        <div className={classes.titleBrand}><img src={brand}  alt="brand" className={classes.brand}/><span className={classes.title}> Bem-vindo a GG</span> </div>
        <Form style={{position:'relative'}} ref={formRef} onSubmit={handleSubmit}>
          
          <label className={classes.label}>E-mail</label>
          <Input required name="email" type="email"  placeholder='Informe seu e-mail cadastrado' className={classes.input}/>
          <label className={classes.label}>Senha</label>
          <Input required name="pass" type="password"  placeholder='Informe sua senha' className={classes.input}/>
          <div className={classes.forgotDiv}><a  className={classes.forgot} href='/forgot'>Esqueceu sua senha?</a></div>
          {error? <div className={classes.errorDiv}><p  className={classes.error}>Usuário ou Senha incorretos.</p></div>:''}
          <button className={classes.btn} type="submit">Entrar</button>
        </Form>
        <div className={classes.singIn}>Ainda não possui conta? <a href='/register' className={classes.singInLink}>Crie agora mesmo.</a></div>
      </div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Login);
