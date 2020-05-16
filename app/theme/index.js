import { createMuiTheme } from '@material-ui/core/styles';
import globalStyles from './global-styles';

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: globalStyles,
  },
});
