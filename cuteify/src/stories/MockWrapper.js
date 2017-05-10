import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../index.css';

injectTapEventPlugin();

const MockWrapper = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

export default MockWrapper;
