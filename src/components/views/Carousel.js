import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import Home from './Home';
import Home2 from './Home2';
import Home3 from './Home3';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>({
    carousel: {
      
      '& > .CarouselItem ': {
        height:900,
        
        [theme.breakpoints.down("sm")]: {
            height:1100,
          },
          [theme.breakpoints.down("xs")]: {
            height:'200vw',

          },
        
      },
    },
  }));




const items = [
    {
        number:1,
        component: Home,
        
    },
    {
        number:2,
        component: Home2,
        
    },
    {
        number:3,
        component: Home3,
        
    },
    
 
]
var buttons=true
// eslint-disable-next-line
if(screen.width<600){
    buttons=false
}
function HomeCarousel() {
    const  classes = useStyles();
        return (
            
                

                <Carousel
                className={classes.carousel}
                    autoPlay={true}
                    timer={500}
                    animation="slide"
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={buttons}
                    navButtonsAlwaysInvisible={!buttons}
                    
                >
                    {
                        items.map((item) => {
                            return <item.component  key={item.number} />
                        })
                    }
                </Carousel>





        )
    
}

export default HomeCarousel;