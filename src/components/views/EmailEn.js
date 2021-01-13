import React,{useState, useRef} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { Form } from '@unform/web';
import Input from '../Form/input';
import Mailchimp from 'react-mailchimp-form'
import Montserrat from "../../assets/Montserrat-Medium.ttf"
const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
    padding:'2% 0'
    
  },
  div:{
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '2%',
   
    maxWidth: 1440,
    backgroundImage: 'linear-gradient(180deg,#e6007e 0%,#e94834 100%)',
    borderRadius: 30,
    zIndex: 5,
    display:'flex',
    flexDirection:'column'
  },
  title:{
    fontFamily: "'Montserrat'",
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    padding:'2% 0',
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      display:'flex',
      flexDirection:'column',
      padding:'5% 0',
    }, 

  },
  subtitle:{
    fontFamily: "'Montserrat'",
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      
    }, 

  },
  yellow:{
    color:'yellow',
    fontSize:24,
    fontWeight:600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      color:'#fff',
    },
  },
  form:{
    '& > input ':{
      fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
      fontSize: 16,
      borderRadius: 25,
      border:'none',
      color: '#383838',
      backgroundColor:'#fff',
      padding:16,
      width:'80%',
      margin:'2% 10%',
      marginBottom:'1%',
      [theme.breakpoints.down("xs")]: {
        width:'90%',
        margin:'2% 5%',
      },
    },
    '& > button ':{
      background: 'none',
      border: '1px solid #fff',
      borderRadius: 18,
      padding: '.3em 1em',
      lineHeight: '2em',
      fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif!important",
      width:'40%',
      margin:'0 30%',
      fontSize: 16,
      fontWeight:600,
      color:'#fff',
      [theme.breakpoints.down("xs")]: {
        width:'45%',
        margin:'0 27.5%',
      },
    },
    '& > .msg-alert ':{
      fontSize: 16,
      fontWeight:600,
      textAlign:'center'
    }
  },
  desk:{
    display:'none',
    [theme.breakpoints.up("sm")]: {
      
      display:'block',
    },
  },
  mobile:{
      display:'block',
    [theme.breakpoints.up("sm")]: {
      display:'none'
    },
  },
  '@font-face': {
    fontFamily: 'Montserrat',
    src: `url(${Montserrat})`,
  },

});


function Email(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Fade>
    
    <div className={classes.div}>
          <span className={`${classes.title} ${classes.desk}`}><span>Be the first to know about</span><span><span className={classes.yellow}> new games in the app</span>,</span><span> <span className={classes.yellow}>championships</span> and</span><span> <span className={classes.yellow}>awards</span>.</span> </span>
          <span className={`${classes.title} ${classes.mobile}`}>Be the first to know about new games in the app, championships and awards. </span>
          <span className={classes.subtitle}>Subscribe below and let us tell you everything.</span>
          <Mailchimp
        action='https://goodgain.us7.list-manage.com/subscribe/post?u=bd4e98710f0ff6729e682cd79&amp;id=09fe9c3e2e'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Type your email',
            type: 'email',
            required: true
          },
          {
            name: 'group[79455][4]',
            value:4,
            type: 'hidden',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thanks for signing up!",
            error: "There was an unexpected internal error.",
            empty: "You need to type an email.",
            duplicate: "This email is already registered.",
            button: "Subscribe"
          }
        }
        styles={
          {
            sendingMsg: {
              color: "black"
            },
            successMsg: {
              color: "yellow"
            },
            duplicateMsg: {
              color: "white"
            },
            errorMsg: {
              color: "white"
            }
          }
        }
        className={classes.form}
        />
    </div>
    
    </Fade>
    </div>
  );
}



export default withStyles(styles)(Email);
