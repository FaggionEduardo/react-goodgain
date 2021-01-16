import React,{ useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco4.svg';
import img from '../../assets/Group-151.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/Group-165.png'
import img4 from '../../assets/Group-162.png'
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Form } from '@unform/web';
import Input from '../Form/input';
import Textarea from '../Form/textarea';
import api from '../../services/api'

const styles = (theme) => ({
  root: {
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    paddingTop:50,
    paddingBottom:80
  },
  container:{
    width:'80%',
    margin:'auto',
    display:'flex',
    padding:'2% 0',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column'
      
    },
  },
  div:{
    width:'47.25%',
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      width:'100%',
      
    },
    
  },
  content:{
    backgroundColor: '#e8e8e8',
    paddingTop: 50,
    paddingRight: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    borderRadius: 20,
    zIndex: 5,
    display:'flex',
    flexDirection:'column',
    

  },
  background:{
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100px',
    backgroundColor:'#212121',
    top: 0,
    height: 100,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  divImg:{
    marginBottom:-61,
   
  },
  input:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 16,
    borderRadius: 25,
    border:'none',
    color: '#383838',
    backgroundColor:'#fff',
    padding:16,
    width:'100%',
    marginBottom:'6%'
  },
  btn:{
    color: '#fff',
    borderWidth: 0,
    borderRadius: 18,
    fontSize: 16,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
    backgroundImage: "linear-gradient(180deg,#e6007e 0%,#e94834 100%)",
    marginTop: 20,
    padding: '.3em 1em',
    lineHeight: '1.7em',
    width:'100%'
  },
  title1:{
    fontFamily: "'Gilroy-regular',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 32,
    color: '#fff',
    fontWeight:400,
    margin:0
  },
  title2:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#fff',
    margin:0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 34,
      
    },
  },
  '@font-face': {
    fontFamily: 'Gilroy-regular',
    src: `url(${GilroyRegular})`
  },
  img1:{
    width:'60%',
    [theme.breakpoints.down("xs")]: {
      width:'80%',
      
    },
  },
  img2:{
    width:'60%',
    [theme.breakpoints.down("xs")]: {
      width:'80%',
      
    },
  },
  img3:{
    width:'12%'
  },
  img4:{
    width:'10%'
  },
  imgAnimation1:{
    willChange: 'transform',
    animation: '$leftRightImage1 5s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-3s',
    width:'100%',
    left:'-4%'
  },
  "@keyframes leftRightImage1": {
    "0%": {
      transform: 'translatex(1%)'
      
    },
    
    "100%": {
      transform: 'translatex(-2%)'
    }
  },
  imgAnimation2:{
    willChange: 'transform',
    animation: '$leftRightImage2 5s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-3s',
    width:'100%',
    left:'20%',
    top:140
  },
  "@keyframes leftRightImage2": {
    "0%": {
      transform: 'translatex(-1%)'
      
    },
    
    "100%": {
      transform: 'translatex(5%)'
    }
  },
  imgAnimation3:{
    willChange: 'transform',
    animation: '$leftRightImage3 4s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.8s',
    animationDuration: '4s',
    animationDelay: '-15s',
    width:'100%',
    left:'-4%',
    top:60
  },
  "@keyframes leftRightImage3": {
    "0%": {
      transform: 'translatex(-2%)'
      
    },
    
    "100%": {
      transform: 'translatex(2%)'
    }
  },
  imgAnimation4:{
    willChange: 'transform',
    animation: '$leftRightImage4 6s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.8s',
    animationDuration: '6s',
    animationDelay: '-15s',
    width:'100%',
    left:'70%',
    top:480,
    [theme.breakpoints.down("md")]: {
      top:300,
      
    },
  },
  "@keyframes leftRightImage4": {
    "0%": {
      transform: 'translatex(2%)'
      
    },
    
    "100%": {
      transform: 'translatex(-2%)'
    }
  },
  msg:{
    position:'absolute',
    transform: 'translatey(-120%)',
    width:'100%',
    textAlign:'center',
    fontSize:20,
  }

});


function Contact(props) {
  const { classes } = props;
  const formRef =useRef(null)
  const [send, setSend] = React.useState(false);
  const [msg, setMsg] = React.useState('Enviando...');
  const [color, setColor] = React.useState('#121212');
  async function handleSubmit (data,{ reset }) {
    try{
    setSend(true)
     let response= await api.post(`/contact`, data)
     console.log(response)
      setMsg('Mensagem enviada!')
      setColor('#41D886')  
      reset()
    }catch(err){
      setMsg('Erro ao enviar e-mail.')
      setColor('red')  
    }
  }
  return (
    <Element name="contact" >
    <div className={classes.background}>
      
    </div>
    <div className={classes.root}>
    <div className={classes.container}>
    <div className={classes.div} style={{marginRight:'5.5%',marginTop:75,height:600,margin:'auto'}}>
        <h3 className={classes.title1}>Ficou com alguma dúvida?</h3>
        <h3 className={classes.title2}>Entre em contato conosco!</h3>
        <div style={{position:'relative'}}>
          <div className={classes.imgAnimation1}>
            <img src={img1}  alt="img1" className={classes.img1}/> 
          </div>
          <div className={classes.imgAnimation2}>
            <img src={img2}  alt="img2" className={classes.img2}/> 
          </div>
          <div className={classes.imgAnimation3}>
            <img src={img3}  alt="img3" className={classes.img3}/> 
          </div>
          <div className={classes.imgAnimation4}>
            <img src={img4}  alt="img4" className={classes.img4}/> 
          </div>
        </div>
    </div>
    <div className={classes.div}>
      <div className={classes.divImg}>
        <img src={img} alt='img' className={classes.img}/>
      </div>
      <div className={classes.content}>
        <Form style={{position:'relative'}} ref={formRef} onSubmit={handleSubmit}>
        <Input required name="name" type="text"  placeholder='Nome' className={classes.input}/>
        <Input required name="email" type="email"  placeholder='E-mail' className={classes.input}/>
        <Input required name="subject" type="text"  placeholder='Assunto' className={classes.input}/>
        <Textarea required name="message" type="text" style={{height:150}}  placeholder='Mensagem' className={classes.input}/>
        {send ? <p style={{color:color}} className={classes.msg}>{msg}</p>:''}
        <button className={classes.btn} type="submit">Enviar</button>
        </Form>
      </div>
    </div>
    </div>
    </div>
    </Element>
  );
}



export default withStyles(styles)(Contact);
