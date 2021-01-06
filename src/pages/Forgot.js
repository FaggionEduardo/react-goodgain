import React from 'react';
import Forgot from '../components/views/Forgot';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Forgot/>
    </React.Fragment>
  );
}

export default withRoot(Index);
