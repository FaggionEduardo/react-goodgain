import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Scrollbar from 'smooth-scrollbar';
import GilroyLight from '../../assets/Gilroy-Light.ttf';
import floatControl from '../../assets/floatControl.jpg';
import bros from '../../assets/bros.jpg';
import background from '../../assets/Group-166.png';
import c1 from '../../assets/Group-162.png';
import c2 from '../../assets/Group-165.png';
import {Grow} from '@material-ui/core';
import rectangle from '../../assets/Rectangle.png';

var options={
  damping:0.05,
  syncCallbacks: true,
  continuousScrolling:true
}
var scrollbar = Scrollbar.init(document.getElementById('scroll'),options)

const styles = (theme) => ({
  root: {
    top: 0,
    zIndex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#212121',
    flexDirection:'column'
  },
  div:{
    width: '80%',
    margin: 'auto',
    height:'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    padding: '2% 0',
    position: 'relative',
    maxWidth: 1440,
    display:'flex',
    marginTop:40,
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',

    },
  },
  containerItem: {
    display: 'flex',
    flexDirection:'column',
    width: '47.25%',
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      width: '100%',
      marginBottom:'60px'
    },
    
    position:'relative',
    padding:0
  },
  containerImg:{
    width: '47.25%',
    position:'relative',
    [theme.breakpoints.down("sm")]: {
      height:360,
      width: '100%',
      
    },
  },
  title:{
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign:'center',
    padding:0,
    margin:0,
    fontWeight:600
  },
  gradient:{
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: "linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)",
    display:'inline',
    backgroundSize:'300%',
    [theme.breakpoints.down("sm")]: {
      display:'block',
      
    },
  },
  text:{
    fontFamily: "'Gilroy-light',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    paddingTop: 25,
    marginTop: 0,
    marginBottom: 0,
    color:'#fff',
    
  },
  '@font-face': {
    fontFamily: 'Gilroy-light',
    src: `url(${GilroyLight})`,
  },
  content:{
    paddingBottom:'1em',
    margin:0
  },
  divImg:{
    willChange: 'transform',
    animation: '$leftRightImage 3s alternate infinite ease-in-out',
    maxWidth:'100%',
    maxHeight:'100%',
    height:'100%',
    width:'100%',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s',
    left:'10%',
    [theme.breakpoints.down("sm")]: {
      left:'4%'
    },
  },
  "@keyframes leftRightImage": {
    "0%": {
      transform: 'translatex(-4%)'
      
    },
    
    "100%": {
      transform: 'translatex(4%)'
    }
  },
  divImg2:{
    willChange: 'transform',
    animation: '$leftRightImage2 3s alternate infinite ease-in-out',
    maxWidth:'100%',
    maxHeight:'100%',
    height:'100%',
    width:'100%',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '5s',
    animationDelay: '-5s',
    left:'5%',
    [theme.breakpoints.down("sm")]: {
      left:'4%'
    },
  },
  "@keyframes leftRightImage2": {
    "0%": {
      transform: 'translatex(4%)'
      
    },
    
    "100%": {
      transform: 'translatex(-4%)'
    }
  },
  img:{
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:'5%'
  },
  img3:{
    maxWidth:'100%',
    maxHeight:'100%',
  },
  divImg3:{
    willChange: 'transform',
    animation: '$leftRightImage3 3s alternate infinite ease-in-out',
    margin:'auto',
    position: 'absolute',
    transition: '.3s',
    animationDuration: '3s',
    animationDelay: '-3s',
    height:75,
    width:75,
  },
  "@keyframes leftRightImage3": {
    "0%": {
      transform: 'translatex(20%)'
      
    },
    
    "100%": {
      transform: 'translatex(-20%)'
    }
  },
  rectangle:{
    width:300,
    margin:'auto',

    [theme.breakpoints.down("sm")]: {
      width:200,
    },
  },

});

function About(props) {
  const { classes } = props;
  const [checkedAbout, setCheckedAbout] = React.useState(false);
  scrollbar.addListener(function(status) { 
    if(scrollbar.isVisible(document.getElementById('about'))){
     
      setCheckedAbout(true)
      
    }
    
    
  
 })
 if(checkedAbout){
  scrollbar.removeListener();
 }
  return (
    <div id="about" style={{backgroundImage: `url(${background})`, backgroundPosition:'center left', backgroundSize:'initial', backgroundRepeat:'no-repeat'}} className={classes.root}>
      <div className={classes.div}>
        <div className={classes.containerItem} style={{marginRight: '5.5%',}}>
          <p className={classes.title}>Sobre a <span className={classes.gradient}>GoodGain</span></p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <div className={classes.text}>
            <p className={classes.content}>A GoodGain é, orgulhosamente, uma <strong>empresa feita por gamers.</strong></p>
            <p className={classes.content}>Nós <strong>transformamos</strong> as habilidades dos jogadores em lucro, proporcionando a diversão do jogo, a adrenalina do desafio e a <strong>satisfação do dinheiro no bolso.</strong></p>
            <p className={classes.content}>Nossa <strong>missão é facilitar o acesso de todos os jogadores ao cenário competitivo</strong>, incluindo cada vez mais pessoas, independente do nível de jogo. E com isso sermos a maior referência global em campeonatos amadores online.</p>
          </div>
        </div>
        <Grow timeout={3000} in={checkedAbout}>
        <div className={classes.containerImg}>
          <div className={classes.divImg}>
          <img src={floatControl} alt="floatControl" className={classes.img}/>
          </div>
          <div className={classes.divImg3} style={{left:'75%',top:'-5%'}}>
          <img src={c1} alt="c1" className={classes.img3}/>
          </div>
          <div className={classes.divImg3} style={{left:'10%',top:'90%'}}>
          <img src={c2} alt="c2" className={classes.img3} />
          </div>
        </div>
        </Grow>
      </div>
      <div className={classes.div}>
      <Grow timeout={3000} in={checkedAbout}>
        <div style={{marginRight: '5.5%',}} className={classes.containerImg}>
          <div className={classes.divImg2}>
          <img src={bros} alt="bros" className={classes.img}/>
          </div>
        </div>
        </Grow>
        <div className={classes.containerItem} >
          <div className={classes.text}>
            <p className={classes.content}>Ética, transparência nas ações, isonomia, respeito ao usuário e tecnologia atualizada são valores inegociáveis para entregarmos a <strong>melhor e mais lucrativa experiência aos jogadores.</strong></p>
            <p className={classes.content}>Nossas competições abrangem partidas rápidas e torneios diários  com premiações em dinheiro.</p>
            <p className={classes.content} style={{fontWeight:600, fontFamily:"'Gilroy',Helvetica,Arial,Lucida,sans-serif"}}><span  className={classes.gradient}>Somos apaixonados por games e, claro, por competir e vencer! Junte-se a nós. </span></p>
          </div>
        </div>
      </div>

    </div>
  );
}



export default withStyles(styles)(About);
