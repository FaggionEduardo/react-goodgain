import React from 'react';
import HomeEn from '../components/views/HomeEn';
import AppAppBarEn from '../components/views/AppAppBarEn';
import withRoot from '../components/withRoot';
import Down from '../components/views/Down';
import Australia from '../components/views/Australia';
import HowItWorksEn from '../components/views/HowItWorksEn';
import ProfitEn from '../components/views/ProfitEn';
import Game from '../components/views/Game';
import BenefitsEn from '../components/views/BenefitsEn';
import Transfer from '../components/views/Transfer';
import HeyMate from '../components/views/HeyMate';
import AboutEn from '../components/views/AboutEn';
import ContactEn from '../components/views/ContactEn';
import FooterEn from '../components/views/FooterEn';
import ScrollTop from '../components/views/ScrollTop';
import EmailEn from '../components/views/EmailEn';
function Index() {
  
  return (
    <React.Fragment>
      <AppAppBarEn />
      <HomeEn />
      <Down />
      <HowItWorksEn />
      <Australia />
      <ProfitEn />
      <Game />
      <EmailEn />
      <BenefitsEn />
      <HeyMate />
      <AboutEn />
      <ContactEn />
      <FooterEn />
      <ScrollTop />
     
    </React.Fragment>
  );
}

export default withRoot(Index);
