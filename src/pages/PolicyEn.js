import React from 'react';
import AppAppBarEn from '../components/views/AppAppBarEn';
import withRoot from '../components/withRoot';
import FooterEn from '../components/views/FooterEn';
import ScrollTop from '../components/views/ScrollTop';
import PolicyEn from '../components/views/PolicyEn';

function Index() {
  
  return (
    <React.Fragment>
      <AppAppBarEn />
      <PolicyEn />
      <FooterEn />
      <ScrollTop />
    </React.Fragment>
  );
}

export default withRoot(Index);
