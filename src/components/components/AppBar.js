import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    boxShadow:'6px 1px 14px 0px #000000',
    
  },
});

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default withStyles(styles)(AppBar);
