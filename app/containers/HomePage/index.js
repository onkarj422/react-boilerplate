/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Button } from '@material-ui/core';
import { useRedirect } from 'components/AppRouter';

export default function HomePage() {
  const redirect = useRedirect();
  return (
    <>
      <Button onClick={() => redirect('/ss')} color="primary">
        Change Route
      </Button>
      <Button color="primary">Call api</Button>
    </>
  );
}
