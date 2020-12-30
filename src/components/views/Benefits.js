import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import wallet from '../../assets/wallet.png'
import trophy from '../../assets/trophy.png'
import shield from '../../assets/shield.png'
import podium from '../../assets/podium.png'
import controls from '../../assets/controls.png'
import money from '../../assets/money.png'
import rectangle from '../../assets/Rectangle-80.png'
import background1 from '../../assets/background1.png'
import background2 from '../../assets/background2.png'
import GilroyMedium from '../../assets/Gilroy-Medium.ttf';
import rectangle2 from '../../assets/Rectangle.png';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = (theme) => ({
  root: {
    backgroundColor:'#121212',
    padding: '2% 0',
    
  },
  div:{
    width: '80%',
    margin: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    maxWidth: 1440,
    display:'flex',
    flexDirection:'column',
  },
  line:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    [theme.breakpoints.down("sm")]: {
      flexDirection:'column',
      justifyContent:'center',
    },
  },
  itemDiv:{
    backgroundColor: '#212121',
    borderRadius: 20,
    paddingTop: 50,
    paddingRight: 30,
    paddingBottom: 50,
    paddingLeft: 30,
    marginBottom:'3%',
    boxShadow: 'inset 0px 0px 18px 0px rgba(0,0,0,0)',
    transition: 'transform 300ms ease 0ms,box-shadow 300ms ease 0ms',
    width: '31.3333%',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    '&:hover': {
      transform:'scale(0.95)',
      boxShadow:'0px 0px 20px 0px #e6007e inset',
   },
   [theme.breakpoints.down("sm")]: {
    width: '100%',
    marginBottom:'5%',
    marginTop:'5%',
    paddingTop: 25,
    paddingRight: 15,
    paddingBottom: 25,
    paddingLeft: 15
  },
  },
  img:{
    marginBottom:'4.787%',
    [theme.breakpoints.down("sm")]: {
      marginBottom:30,
    },
  },
  title:{
    padding:0,
    margin:0,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 24,
    color:'#fff',
    fontWeight:600,
    textAlign:'center'
  },
  subTitle:{
    padding:0,
    margin:0,
    fontFamily: "'Gilroy-medium',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 16,
    color:'#fff',
    textAlign:'center'
  },
  '@font-face': {
    fontFamily: 'Gilroy-medium',
    src: `url(${GilroyMedium})`,
  },
  rectangle:{
    marginTop:15,
    marginBottom:'4.787%',
    [theme.breakpoints.down("sm")]: {
      marginBottom: 30
    },
  },
  mainTitle:{ 
    fontWeight: 600,
    fontFamily: "'Gilroy',Helvetica,Arial,Lucida,sans-serif",
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    margin:0,
    paddingBottom: '4%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    },
  gradiente:{
    backgroundImage: 'linear-gradient(180deg,rgba(230,0,126,100) 0%,rgba(233,72,52,100) 100%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
    display:'inline',
    [theme.breakpoints.down("sm")]: {
      display:'block',
      
    },
  },
  background1:{
    backgroundSize: 'initial',
    backgroundPosition: 'top right',
    backgroundImage: `url(${background1})`,
    backgroundRepeat: 'no-repeat',
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 120,
    },
  },
  background2:{
    backgroundSize: 'initial',
    backgroundPosition: 'bottom left',
    backgroundImage: `url(${background2})`,
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
    },
  },
  rectangle2:{
    width:300,
    margin:'auto',
    marginTop:'1%',
    [theme.breakpoints.down("sm")]: {
      width:200,
    },
  },

  
});


function Benefits(props) {
  const { classes } = props;
  return (
    <Element name="benefits" >
    <div className={classes.root}>
    <div className={classes.background1}>
    <div className={classes.div}>
    
    <div className={classes.mainTitle}><span>Coisas que você <span className={classes.gradiente}>precisa saber </span></span>  <img src={rectangle2} alt="rectangle" className={classes.rectangle2}/>
    </div>

      <div className={classes.line}>
        <div className={classes.itemDiv}>
          <img src={money} alt="money" className={classes.img}/>
          <p className={classes.title}>Retiradas rápidas</p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Você pode solicitar o saque do seu
            <br/>
            saldo a qualquer momento.
          </p>
        </div>
        <div className={classes.itemDiv}>
          <img src={trophy} alt="trophy" className={classes.img}/>
          <p className={classes.title}>
            Ranking com
            <br/>
            premiação mensal
          </p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Acumule pontos a cada partida realizada e concorra a prêmios.
          </p>
        </div>
        <div className={classes.itemDiv}>
          <img src={podium} alt="podium" className={classes.img}/>
          <p className={classes.title}>
            Torneios diários
          </p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Participe dos torneios online com ganhos de até 1.000% do capital. Garanta sua vaga e lucre alto com a sua habilidade!
          </p>
        </div>
      </div>
      </div>
      </div>
      <div className={classes.background2}>
      <div className={classes.div}>
      <div className={classes.line}>
      <div className={classes.itemDiv}>
          <img src={controls} alt="controls" className={classes.img}/>
          <p className={classes.title}>
            Partidas rápidas
          </p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Aqui sua vitória vale dinheiro! Desafie outro jogador para um amistoso online no seu jogo preferido, vença e lucre. 
          </p>
        </div>
        <div className={classes.itemDiv}>
          <img src={wallet} alt="wallet" className={classes.img}/>
          <p className={classes.title}>
            Valores acessíveis
          </p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Não importa o nível, nós queremos incluir todos no competitivo. Encontre salas de competição a partir de R$ 5,00. 
          </p>
        </div>
        <div className={classes.itemDiv}>
        <img src={shield} alt="shield" className={classes.img}/>
        <p className={classes.title}>
            Seguro e protegido
          </p>
          <img src={rectangle} alt="rectangle" className={classes.rectangle}/>
          <p className={classes.subTitle}>
            Orgulhosamente colocamos a sua segurança em primeiro lugar. E também levamos a isonomia muito a sério! Nossa área de fraude é rigorosa e vigilante. 
          </p>
        </div>
      </div>
      
    </div>
    </div>
    </div>
    </Element>
  );
}



export default withStyles(styles)(Benefits);
