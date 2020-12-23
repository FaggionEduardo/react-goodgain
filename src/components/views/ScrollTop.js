import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Scrollbar from 'smooth-scrollbar';
import dbarrow from '../../assets/dbarrow.svg'
var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)
const styles = (theme) => ({
  div: {
    position:'fixed',
    top:-10,
    right:-10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    zIndex:1000
  },
  circle:{
    color:'#e94834',

  },
  dbarrow:{
    position:'absolute',
    width:15
  }
});
function scrollTop() {

  scrollbar.scrollTo(0,0,1000)

}
function ScrollTop(props) {
  const { classes } = props;
  const [progress, setProgress] = React.useState(0);
  scrollbar.addListener(function(status) { 
    var fixed=document.getElementById('fixed2')
        setProgress(Math.trunc(scrollbar.offset.y/scrollbar.limit.y*100))
        var offset = status.offset; 
        // eslint-disable-next-line
        if(screen.height>1000){
          // eslint-disable-next-line
        fixed.style.top = offset.y +screen.height-(screen.height*0.2)+ 'px';
        }else{
          // eslint-disable-next-line 
        fixed.style.top = offset.y +screen.height-(screen.height*0.3)+ 'px';
        }
        fixed.style.right = offset.x +50+ 'px';
        

  })
  return (
    <div id='fixed2' onClick={scrollTop} className={classes.div}>
      <CircularProgress className={classes.circle} size={50} value={progress} variant="determinate">
          
      </CircularProgress>
      <img src={dbarrow} alt="dbarrow" className={classes.dbarrow}/>
    </div>
  );
}



export default withStyles(styles)(ScrollTop);
