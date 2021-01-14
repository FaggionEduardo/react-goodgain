import React from 'react';
import AppAppBarEn from '../components/views/AppAppBarEn';
import withRoot from '../components/withRoot';
import FooterEn from '../components/views/FooterEn';
import ScrollTop from '../components/views/ScrollTop';
import TermsEn from '../components/views/TermsEn';

function Index() {
  
  return (
    <React.Fragment>
      <AppAppBarEn />
      <TermsEn />
      <FooterEn />
      <ScrollTop />
    </React.Fragment>
  );
}

export default withRoot(Index);
