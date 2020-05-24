import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import { matchPath } from 'react-router';
import { AppRouterContext } from './Provider';

export default function RouteWrapper({ component, ...route }) {
  return (
    <Route
      {...route}
      render={props => (
        <ComponentWrapper {...route} {...props} component={component} />
      )}
    />
  );
}

function ComponentWrapper({
  component: Component,
  routes: childRoutes,
  allRoutes,
  ...route
}) {
  const { to, redirect } = useContext(AppRouterContext);
  const match = useRouteMatch();
  const redirectComponent = <Redirect to={to} />;
  const matchedTo = matchPath(to, { path: to });
  if (!match.isExact) {
    redirect('none');
  }
  if (to !== 'none' && match.path !== matchedTo.path) {
    return redirectComponent;
  }
  return (
    <Component route={route}>
      <If condition={childRoutes}>
        <For each="childRoute" index="index" of={childRoutes}>
          <RouteWrapper key={index} {...childRoutes} />
        </For>
      </If>
    </Component>
  );
}

export const RouteProps = {
  path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  exact: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.any,
  routes: PropTypes.array,
  allRoutes: PropTypes.array,
};

RouteWrapper.propTypes = RouteProps;
ComponentWrapper.propTypes = RouteProps;
