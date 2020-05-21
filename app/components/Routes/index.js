import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import Route from './Route';

export default function Routes({ routes, switched }) {
  const mappedRoutes = (
    <For each="route" index="index" of={routes}>
      <Route key={index} {...route} />
    </For>
  );
  return (
    <Choose>
      <When condition={switched}>
        <Switch>{mappedRoutes}</Switch>
      </When>
      <When condition={!switched}>{mappedRoutes}</When>
    </Choose>
  );
}

Routes.propTypes = {
  routes: PropTypes.array,
  switched: PropTypes.bool,
};
