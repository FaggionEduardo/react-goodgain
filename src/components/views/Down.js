import React from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { withStyles } from '@material-ui/core/styles';
import control from '../../assets/Group-152.png';
import background from '../../assets/arco.svg';


const styles = (theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100px',
    backgroundColor:'#121212',
    top: 0,
    height: 100,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  control:{
    height:65,
    cursor:'pointer'
  }
});
function scrollBottom() {
  scroll.scrollToBottom();
}
function Down(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <img src={control} alt="control" onClick={scrollBottom} className={classes.control}/>
    </div>
  );
}



export default withStyles(styles)(Down);
