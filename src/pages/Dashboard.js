import React from 'react';
import Dashboard from '../components/views/Dashboard';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Dashboard/>
    </React.Fragment>
  );
}

export default withRoot(Index);
