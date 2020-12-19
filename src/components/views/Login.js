import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import GilroyRegular from '../../assets/Gilroy-Regular.ttf';
import background from '../../assets/backgroundControls.jpg';
import logo from '../../assets/whiteLogo.png';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

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
  }
});


function Login(props) {
  const { classes } = props;
  const [checkedStart, setCheckedStart] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('start'))){
     
      setCheckedStart(true)
      
    }
    
    
  
 })
 if(checkedStart){
  scrollbar.removeListener();
 }
  return (
    <div className={classes.root}>
      <img src={logo}  alt="logo" className={classes.logo}/> 
    <div className={classes.div}>
    
      <div className={classes.content}>
        <form >
          <input type='text' placeholder='Nome' className={classes.input}></input>
          <input type='text' placeholder='Email' className={classes.input}></input>
          <input type='text' placeholder='Assunto' className={classes.input}></input>
          <textarea type='text' placeholder='Mensagem' style={{height:150}} className={classes.input}></textarea>
          <button className={classes.btn} type="submit">Enviar</button>
        </form>
      </div>
    </div>
    </div>
  );
}



export default withStyles(styles)(Login);
