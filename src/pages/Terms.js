import React from 'react';
import AppAppBar from '../components/views/AppAppBar';
import withRoot from '../components/withRoot';
import Footer from '../components/views/Footer';
import ScrollTop from '../components/views/ScrollTop';
import Terms from '../components/views/Terms';

function Index() {
  
  return (
    <React.Fragment>
      <AppAppBar />
      <Terms />
      <Footer />
      <ScrollTop />
    </React.Fragment>
  );
}

export default withRoot(Index);
