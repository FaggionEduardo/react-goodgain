import React from 'react';
import Register from '../components/views/Register';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <Register/>
    </React.Fragment>
  );
}

export default withRoot(Index);
