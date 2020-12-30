import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import dbarrow from '../../assets/dbarrow.svg';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const styles = (theme) => ({
  div: {
    position:'fixed',
    bottom:'5vh',
    right:'5vw',
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

  scroll.scrollToTop()

}
function ScrollTop(props) {
  const { classes } = props;
  const [progress, setProgress] = React.useState(0);
  window.addEventListener('scroll', () => {
    var limit= document.documentElement.scrollHeight - document.documentElement.clientHeight
    setProgress(Math.trunc(window.pageYOffset/limit*100))
  });


  return (
    <div onClick={scrollTop} className={classes.div}>
      <CircularProgress className={classes.circle} size={50} value={progress} variant="determinate">
          
      </CircularProgress>
      <img src={dbarrow} alt="dbarrow" className={classes.dbarrow}/>
    </div>
  );
}



export default withStyles(styles)(ScrollTop);
