import React from 'react';
import AppAppBar from '../components/views/AppAppBar';
import withRoot from '../components/withRoot';
import Footer from '../components/views/Footer';
import ScrollTop from '../components/views/ScrollTop';
import Policy from '../components/views/Policy';

function Index() {
  
  return (
    <React.Fragment>
      <AppAppBar />
      <Policy />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

export default withRoot(Index);
