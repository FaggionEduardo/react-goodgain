import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import background from '../../assets/arco4.svg';
import Scrollbar from 'smooth-scrollbar';
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
    marginTop:-100
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
    <div className={classes.div}>
      <div className={classes.content}></div>
    </div>
    </div>
    </>
  );
}



export default withStyles(styles)(Contact);
