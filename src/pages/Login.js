import React from 'react';
import Login from '../components/views/Login';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Login/>
    </React.Fragment>
  );
}

export default withRoot(Index);
