import React from 'react';
import Withdraw from '../components/views/Withdraw';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Withdraw/>
    </React.Fragment>
  );
}

export default withRoot(Index);
