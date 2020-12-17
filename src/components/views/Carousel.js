import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import Home from './Home';





const items = [
    {
        number:1,
        component: Home,
        
    },
    {
        number:2,
        component: Home,
        
    },
    {
        number:2,
        component: Home,
        
    },
    
 
]
var buttons=true
// eslint-disable-next-line
if(screen.width<600){
    buttons=false
}
class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: buttons,
            navButtonsAlwaysInvisible: !buttons
        }

        autoBind(this);
    }

    
   

    render() {
        return (
            
                

                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        items.map((item) => {
                            return <item.component key={item.number} />
                        })
                    }
                </Carousel>





        )
    }
}

export default BannerExample;