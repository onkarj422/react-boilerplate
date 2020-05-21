import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactRoute } from 'react-router';

export default function Route({ component, ...route }) {
  return (
    <ReactRoute
      {...route}
      render={() => <RouteComponent component={component} {...route} />}
    />
  );
}

function RouteComponent({
  component: Component,
  routes: childRoutes,
  ...route
}) {
  return (
    <Component route={route}>
      <If condition={childRoutes}>
        <For each="childRoute" index="index" of={childRoutes}>
          <Route key={index} {...childRoutes} />
        </For>
      </If>
    </Component>
  );
}

const RouteProps = {
  path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  exact: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.any,
  routes: PropTypes.array,
};

Route.propTypes = RouteProps;
RouteComponent.propTypes = RouteProps;
