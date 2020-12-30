import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import callofduty from '../../assets/cod.png'
import fifa from '../../assets/fifa21.png'
import r6 from '../../assets/rainbow.png'
import csgo from '../../assets/csgo.png'
import freefire from '../../assets/freefire.png'
import dota from '../../assets/dota.png'
import csgoLogo from '../../assets/csgoLogo.png'
import freefireLogo from '../../assets/freefireLogo.png'
import dotaLogo from '../../assets/dotaLogo.png'
import callofdutyLogo from '../../assets/warzonelogo.png'
import fifaLogo from '../../assets/fifa21logo.png'
import r6Logo from '../../assets/rainbowlogo.png'
import { makeStyles } from '@material-ui/core/styles';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const useStyles = makeStyles(theme =>({
    root: {
      backgroundColor:'#121212',
      paddingTop:'6%'
    },
    div:{
      
      width: '80%',
      margin: 'auto',
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      padding: '2% 0',
      position: 'relative',
      maxWidth: 1440,
      display:'flex',
      [theme.breakpoints.down("sm")]: {
        flexDirection:'column',
        width: '100%',
      },
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
    divImg: {
      width:'48.5%',
      position:'relative',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      '&:hover': {
        transition:'1s  ease-in-out',
        transform:'scale(1.2)!important',
        
     },
     [theme.breakpoints.down("sm")]: {
      width:'100%',
      marginTop:'20%',
      marginBottom:'20%'
    
    },
    },
    img:{
      position: 'relative',
      top: 0,
      left: 0,
      height: 300,
      zIndex:2,
      [theme.breakpoints.down("sm")]: {
        margin: 15,
      
      },
     
    },
    animation:{
      position: 'absolute',
      top: '35%',
      left: '49%',
      right: 0,
      bottom: 0,
      width:'1%',
      height:'1%',
      borderRadius:"50%",
      zIndex:1,
      boxShadow:'0px 0px 150px 100px #e6007e ',
    
    },
    logo:{
      width:'45%',
      paddingTop:'5%'
    },
    
  
    
  }));
function  Banner(props) {
    const classes = useStyles();
    const mediaLength = 3;
    let items=[]
    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.games[i];

        const media = (
            
            <div className={classes.divImg} key={item.Name}>
                <img src={item.Image} alt={item.Name} className={classes.img}/> 
                <img src={item.Logo} alt={`${item.Name}Logo`} className={classes.logo}/> 
              <div className={classes.animation}></div>
            </div>

        )

        items.push(media);
    }
    return (
        <section id='games'> 
            <div className={classes.root}>
                <div className={classes.div}>
                    <div className={classes.line}>
                        {items}
                    </div>
                </div>
            </div>
        </section>
    )
}

const items = [
    {
        
        games: [
            {
                Name:'r6',
                Image: r6,
                Logo: r6Logo
            },
            {
                Name:'callofduty',
                Image: callofduty,
                Logo: callofdutyLogo
            },
            {
                Name:'fifa',
                Image: fifa,
                Logo: fifaLogo
            }
        ]
    },
    {
        
        games: [
            {
                Name:'csgo',
                Image: csgo,
                Logo: csgoLogo
            },
            {
                Name:'freefire',
                Image: freefire,
                Logo: freefireLogo
            },
            {
                Name:'dota',
                Image: dota,
                Logo: dotaLogo
            }
        ]
    },

]

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }


    render() {
        return (
            <Element name="game" >
                <Carousel
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} />
                        })
                    }
                </Carousel>
            </Element>
        )
    }
}

export default (Game);