import React from 'react';
import AppAppBar from '../components/views/AppAppBar';
import withRoot from '../components/withRoot';
import Footer from '../components/views/Footer';
import ScrollTop from '../components/views/ScrollTop';
import FAQ from '../components/views/Faq';

function Index() {
  
  return (
    <React.Fragment>
      <AppAppBar />
      <FAQ />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

export default withRoot(Index);
