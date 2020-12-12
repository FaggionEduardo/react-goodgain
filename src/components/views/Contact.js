import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco4.svg';
import Scrollbar from 'smooth-scrollbar';
import img from '../../assets/Group-151.png'
import {Grow} from '@material-ui/core';
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  root: {
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    
  },
  container:{
    width:'80%',
    margin:'auto'
  },
  div:{
    width:'47.25%',
    
  },
  content:{
    backgroundColor: '#e8e8e8',
    paddingTop: 50,
    paddingRight: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    borderRadius: 20,
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
    marginBottom:-61
  },
  input:{
    fontFamily: "'Giroy medium',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 16,
    borderRadius: 25,
    border:'none',
    color: '#383838',
    backgroundColor:'#fff',
    padding:16,
    width:'100%',
    marginBottom:'6%'
  }

});


function Contact(props) {
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
    <>
    <div className={classes.background}>
      
    </div>
    <div id="start" className={classes.root}>
    <div className={classes.container}>
    <div className={classes.div}>
      <div className={classes.divImg}>
        <img src={img} alt='img' className={classes.img}/>
      </div>
      <div className={classes.content}>
        <form >
          <input type='text' placeholder='Nome' className={classes.input}></input>
          <input type='text' placeholder='Email' className={classes.input}></input>
          <input type='text' placeholder='Assunto' className={classes.input}></input>
          <textarea type='text' placeholder='Mensagem' style={{height:150}} className={classes.input}></textarea>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}



export default withStyles(styles)(Contact);
