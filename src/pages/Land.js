import React from 'react';
import Home from '../components/views/Home';
import AppAppBar from '../components/views/AppAppBar';
import withRoot from '../components/withRoot';
import Down from '../components/views/Down';
import Download from '../components/views/Download';
import HowItWorks from '../components/views/HowItWorks';
import Profit from '../components/views/Profit';
import Game from '../components/views/Game';

function Index() {
  
  return (
    <React.Fragment>
      
      <AppAppBar />
      <Home />
      <Down />
      <HowItWorks />
      <Download />
      <Profit />
      <Game />
    </React.Fragment>
  );
}

export default withRoot(Index);
