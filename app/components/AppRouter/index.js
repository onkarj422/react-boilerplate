import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import Route from './Route';
import AppRouterProvider from './Provider';

export { useRedirect } from './hooks';

export default function Routes({ routes, switched }) {
  const mappedRoutes = (
    <For each="route" index="index" of={routes}>
      <Route key={index} {...route} allRoutes={routes} />
    </For>
  );
  const wrapped = (
    <Choose>
      <When condition={switched}>
        <Switch>{mappedRoutes}</Switch>
      </When>
      <When condition={!switched}>{mappedRoutes}</When>
    </Choose>
  );
  return <AppRouterProvider>{wrapped}</AppRouterProvider>;
}

Routes.propTypes = {
  routes: PropTypes.array,
  switched: PropTypes.bool,
};
