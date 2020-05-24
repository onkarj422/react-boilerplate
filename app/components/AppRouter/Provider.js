import React from 'react';
import PropTypes from 'prop-types';

export const AppRouterContext = React.createContext();

export default function AppRouterProvider({ children }) {
  const [to, redirect] = React.useState('none');
  return (
    <AppRouterContext.Provider value={{ to, redirect }}>
      {children}
    </AppRouterContext.Provider>
  );
}

AppRouterProvider.propTypes = {
  children: PropTypes.node,
};
