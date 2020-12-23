import React from 'react';
import SingIn from '../components/views/Singin';
import withRoot from '../components/withRoot';

function Index() {
  
  return (
    <React.Fragment>
      <SingIn/>
    </React.Fragment>
  );
}

export default withRoot(Index);
