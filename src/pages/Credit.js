import React from 'react';
import Credit from '../components/views/Credit';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Credit/>
    </React.Fragment>
  );
}

export default withRoot(Index);
