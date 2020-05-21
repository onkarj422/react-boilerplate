/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Routes from 'components/Routes';
import routes from 'routes';

export default function App() {
  return (
    <CssBaseline>
      <Routes routes={routes} />
    </CssBaseline>
  );
}
