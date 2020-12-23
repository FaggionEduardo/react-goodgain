import React from 'react';
import Home from '../components/views/Home';
import AppAppBar from '../components/views/AppAppBar';
import withRoot from '../components/withRoot';
import Down from '../components/views/Down';
import Download from '../components/views/Download';
import HowItWorks from '../components/views/HowItWorks';
import Profit from '../components/views/Profit';
import Game from '../components/views/Game';
import Benefits from '../components/views/Benefits';
import Transfer from '../components/views/Transfer';
import Start from '../components/views/Start';
import About from '../components/views/About';
import Contact from '../components/views/Contact';
import Footer from '../components/views/Footer';
import ScrollTop from '../components/views/ScrollTop';
import Promotion from '../components/views/Promotion';
import Carousel from '../components/views/Carousel';
function Index() {
  
  return (
    <React.Fragment>
      <AppAppBar />
      <Promotion />
      <Carousel />
      <Down />
      <HowItWorks />
      <Download />
      <Profit />
      <Game />
      <Benefits />
      <Transfer />
      <Start />
      <About />
      <Contact />
      <Footer />
      <ScrollTop />
     
    </React.Fragment>
  );
}

export default withRoot(Index);
