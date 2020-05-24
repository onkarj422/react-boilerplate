import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import RouteWrapper from './RouteWrapper';
import AppRouterProvider from './Provider';

export { useRedirect } from './hooks';

export default function AppRouter({ routes, switched }) {
  const mappedRoutes = (
    <For each="route" index="index" of={routes}>
      <RouteWrapper key={index} {...route} allRoutes={routes} />
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

AppRouter.propTypes = {
  routes: PropTypes.array,
  switched: PropTypes.bool,
};
