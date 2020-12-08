import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    maxWidth: 1440,
    width: '80%',
    padding:'2% 0',
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      height: 200,
      flexDirection:'column',
      padding:'30px 0',
    },
  },
});

export default withStyles(styles)(Toolbar);
