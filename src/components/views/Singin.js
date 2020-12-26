import React, {useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
import img from '../../assets/idImage.svg';
import cam from '../../assets/cam.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Form } from '@unform/web';
import Input from '../Form/input';
import Select from '../Form/select';
import { each } from 'jquery';



const useStyles = makeStyles(theme =>({
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
    
    [theme.breakpoints.down("sm")]: {
      width:'90%',
      
    },
    
  },
  content:{
    backgroundColor: '#e8e8e8',
    paddingTop: '5%',
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
    position:'relative'

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
    margin:'20px 0',
    marginBottom:'4%',
    '&:disabled': {
      opacity: '0.5'
    }

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
  divTitle:{
   
    padding:'2% 0',
    display:'flex',
    alignItems:'center',

  },
  title:{
    fontSize:20,
    fontWeight:600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    textAlign:'center'
  },
  
  
  subTitle:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
  },
  circle:{
    color:'#41D886',
    position:'absolute',
    left: 0,
    

  },
  circleBottom:{
    color:'#fff'
  },
  circles:{
    position:'relative',
    margin:'0 2%',
    display:'flex',
    alignItems:'center'
    
  },
  stage:{
    display:'flex',
    fontSize:22,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#fff',
    width:'35%',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'1% 0',
    [theme.breakpoints.down("sm")]: {
      width:'90%',
      
    },

  },
  stageNumber:{
    position:'absolute',
    left:13,
    fontSize:25,
   
  },
  label:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:16,
    paddingLeft:'2%'
  },
  lastTitle:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:20,
    padding:'2%',
    paddingBottom:'6%',
    fontWeight:600
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
  back:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'center',
    cursor:'pointer'
  },
  limit:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#121212',
    fontSize:14,
    width:'100%',
    textAlign:'right',
    
  },
  add:{
    fontSize:14,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    textAlign:'left',
    postion:'relative',
    paddingLeft:40,
    height:24,
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    width:'80%',
    '&:before': {
      content: "'\\f055'",
      font: 'normal normal normal 17px/1 FontAwesome',
      WebkitBackgroundClip:'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '300%',
      backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
      position: 'absolute',
      pointerEvents: 'none',
      transform:'translate(-28px)',
      fontSize:24,
    }
  },
  addText:{
    fontSize:14,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    textAlign:'left',
    display:'inline',
    cursor:'pointer',
    
  },
  remove:{
    width:24,
    height:24,
    position:'absolute',
    transform:'translate(29vw)',
    [theme.breakpoints.down("sm")]: {
      transform:'translate(74vw)',  
    },
    cursor:'pointer',
    '&:after': {
      content: "'\\f1f8'",
      font: 'normal normal normal 17px/1 FontAwesome',
      WebkitBackgroundClip:'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '300%',
      backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
      position: 'absolute',
      pointerEvents: 'none',
      fontSize:24,
    }
  },
  icon:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300%',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
  },
  consoles:{
    paddingTop:40
  },
  lastDiv:{
    width:'100%',
    borderRadius:30,
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    display:'flex',
    padding:'10% 4%',
    margin:'10% 0'
  },
  divLeft:{
    width:'35%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  divRight:{
    width:'65%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:'100%'
  },
  cam:{
    width:'15%'
  },
  take:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif!important",
    color:'#fff',
    fontSize:'1.8vw',
    padding:'0 5%',
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      fontSize:'3vw',
      
    },
    checkDiv:{
      display:'flex'
    },
   
  }
}));
function FormConsole(props){
  
  const classes = useStyles();
  return(
    
  <div style={props.style} className={classes.consoles}>
    <label className={classes.label}>Qual o modelo do seu console?</label>
    <div className={classes.divSelect}>
    <Select required defaultValue='' name={'videogame['+props.index+']'} style={{paddingRight:50}} className={classes.input}>
      <option value='' disabled>Selecione</option>
      <option value='M'>Masculino</option>
      <option value='F'>Feminino</option>
      <option value='O'>Outro</option>
    </Select>
    </div>
    <label className={classes.label}>Qual seu ID no console (idêntico ao console)</label>
    <Input required name={'idvideogame['+props.index+']'} type="text"  placeholder='Informe seu ID exatamente conforme console' className={classes.input}/>
    <label className={classes.label}>Confirme seu ID no console</label>
    <Input required name={'confirmidvideogame['+props.index+']'} type="text"  placeholder='Confirme seu ID' className={classes.input}/>
    
    </div>
  )
}

function useForceUpdate(){
  const [value, setValue] = React.useState(0); 
  return () => setValue(value => ++value); 

}

function SingIn(props) {
  const classes  = useStyles();
  const [stage, setStage] = React.useState(0);
  const [item, setItem] = React.useState(0);
  const [region, setRegion] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('disabled');
  const [strength, setStrength] = React.useState(0);
  const [jsonForm, setJsonForm] = React.useState({});
  const forceUpdate = useForceUpdate();
  const formRef =useRef(null)
  
  const handleSubmit = async (data) => {
    var confirmOk=true
    if(stage==2){
      
      let i=0
      for(i=0;i<data.idvideogame.length;i++){
        let confirmidvideogame = formRef.current.getFieldRef('confirmidvideogame['+i+']');
        if(data.idvideogame[i]!==data.confirmidvideogame[i]){
          if(confirmidvideogame){
          confirmOk=false
          confirmidvideogame.style.border = "1px solid red"
          }

        }else{
          if(confirmidvideogame){
            confirmidvideogame.style.border = "none"
          }
        }
      }
      var array=[]
      data.idvideogame.map((item) =>{
        array.push(item)
      })
      data.idvideogame=array
      array=[]
      data.videogame.map((item) =>{
        array.push(item)
      })
      data.videogame=array
      delete data.confirmidvideogame
    }
    if(stage==3){
      delete data.confirmpass
    }
    if(confirmOk){
      
    console.log(data)
    let json=jsonForm
    let obj=Object.assign({}, json, data)
    let countryState={country:country,state:region}
    obj=Object.assign({}, obj, countryState)
    setJsonForm(obj)
    console.log(obj)
    setStage(stage+1)
    }
    }
  function changePassword(e){
    setPassword(e.target.value)
  }
  function confirmPassword(e){
    const confirmpass = formRef.current.getFieldRef('confirmpass');
    if(e.target.value==password){
      setConfirm('')
      confirmpass.style.border = "none"
    }else{
      setConfirm('disabled')
      confirmpass.style.border='1px solid red'
    }
  }
  function addConsole(){
    let array=rows
    array.push(<div key={item}><FormConsole index={item+1} /><div className={classes.remove} onClick={()=>deleteConsole(item)}></div></div>);
    setRows(array)
    setItem(item+1)
  }
 function deleteConsole(a){
    let array=rows
    array[a]=''
    setRows(array)
    forceUpdate()
  }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/>
      
    {stage==0?
    
    <div className={classes.div}>
    
      <div className={classes.content}>
          <div className={classes.divTitle} ><span className={classes.title}>Você está a poucos passos de iniciar sua experiência GoodGain.</span></div>
          <div className={classes.subTitle}>Precisamos apenas de algumas informações.</div>
          <button className={classes.btn} onClick={()=>setStage(1)}>Criar minha conta</button>
       
      </div>
    </div>
    :''
  }
  {stage==1?
    <>
    <div className={classes.stage}><span style={{paddingLeft:15}}>Informações pessoais</span><div className={classes.circles}><CircularProgress thickness={4} className={classes.circleBottom} size={40} value={100} variant="determinate"/><CircularProgress  className={classes.circle} thickness={5} size={40} value={stage*(100/3)} variant="determinate"/><span className={classes.stageNumber}>{stage}</span></div></div>
    <div className={classes.div}>
    <Form ref={formRef} onSubmit={handleSubmit}> 
      <div className={classes.content}>
          <label className={classes.label}>Nome completo</label>
          <Input required name="name" type="text"  placeholder='Informe seu nome' className={classes.input}/>
          <label className={classes.label} style={{display:'flex', justifyContent:'space-between'}}><span>Usuário</span><span className={classes.limit}>Até 10 caractéres</span></label>
          <Input required name="nickname" max="10" type="text"  placeholder='Informe um usuário' className={classes.input}/>
          <label className={classes.label}>Nascimento</label>
          <Input required name="birthday" type="date"  placeholder='Selecione a data de nascimento' className={classes.input}/>
          <label className={classes.label}>Sexo</label>
          <div className={classes.divSelect}>
          <Select required defaultValue='' name='sex' style={{paddingRight:50}} className={classes.input}>
            <option value='' disabled>Selecione</option>
            <option value='M'>Masculino</option>
            <option value='F'>Feminino</option>
            <option value='O'>Outro</option>
          </Select>
          </div>
          <label className={classes.label}>CPF</label>
          <Input required name="cpf" type="text"  placeholder='Informe seu CPF' className={classes.input}/>
          <label className={classes.label}>Pais</label>
          <div className={classes.divSelect}>
          <CountryDropdown
          className={classes.input}
          defaultOptionLabel='Selecione'
          value={country}
          onChange={(val) => setCountry(val)} required/>
          </div>
          <label className={classes.label}>Estado</label>
          <div className={classes.divSelect}>
          <RegionDropdown
          className={classes.input}
          blankOptionLabel='Selecione'
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} required/>
          </div>
          <button type='submit' className={classes.btn}>Próximo passo</button>
          <span type="button" className={classes.back} onClick={()=>setStage(0)}>Voltar</span>
         
       
      </div>
      </Form>
    </div>
    </>
    :''
  }
  {stage==2?
    <>
    <div className={classes.stage}><span style={{paddingLeft:15}}>Informações do console</span><div className={classes.circles}><CircularProgress thickness={4} className={classes.circleBottom} size={40} value={100} variant="determinate"/><CircularProgress  className={classes.circle} thickness={5} size={40} value={stage*(100/3)} variant="determinate"/><span className={classes.stageNumber}>{stage}</span></div></div>
    <div className={classes.div}>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={classes.content}>
          <div id="consoles">
          
          <div><FormConsole index={0} style={{paddingTop:0}}/></div>
         
          {
            rows.map((row) => {
                return row
            })
        }
          </div>
          <div className={classes.add} onClick={()=>{addConsole()}}><div className={classes.addText}>Adicionar outro console.</div></div>
          <button type='submit' className={classes.btn}>Próximo passo</button>
          <span className={classes.back} onClick={()=>setStage(1)}>Voltar</span>
         
       
      </div>
      </Form>
    </div>
    </>
    :''
  }
  {stage==3?
    <>
    <div className={classes.stage}><span style={{paddingLeft:15}}>Dados de login</span><div className={classes.circles}><CircularProgress thickness={4} className={classes.circleBottom} size={40} value={100} variant="determinate"/><CircularProgress  className={classes.circle} thickness={5} size={40} value={stage*(100/3)} variant="determinate"/><span className={classes.stageNumber}>{stage}</span></div></div>
    <div className={classes.div}>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={classes.content}>
      <span className={classes.lastTitle}>Este é o ultimo passo.</span>
          <label className={classes.label}>E-mail</label>
          <Input required name="email" type="email"  placeholder='Informe um e-mail para cadastro' className={classes.input}/>
          <label className={classes.label}>Senha</label>
          <Input required name="pass" type="password"  placeholder='Informe uma senha' onChange={changePassword} className={classes.input}/>
          <PasswordStrengthBar onChangeScore={score=>{setStrength(score)}} shortScoreWord='Muito curta' scoreWords={['Fraca', 'Fraca', 'OK', 'Boa', 'Forte']} className={classes.password} password={password} />
          <label className={classes.label}>Confirme a senha</label>
          <Input required name="confirmpass" type="password"  placeholder='Confirme a senha' onChange={confirmPassword} className={classes.input}/>
          <button disabled={strength>1?confirm:'disabled'} className={classes.btn}>Criar conta</button>
          <span className={classes.back} onClick={()=>setStage(2)}>Voltar</span>
          </div>
          </Form>
      </div>
    </>
    :''
  }
  
  
  </div>
  ); 
}



export default (SingIn);
