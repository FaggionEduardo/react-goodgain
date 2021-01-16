import React from 'react';
import Loading from '../components/views/Loading';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Loading/>
    </React.Fragment>
  );
}

export default withRoot(Index);
