import { useContext } from 'react';
import { AppRouterContext } from './Provider';

export function useRedirect() {
  const { redirect } = useContext(AppRouterContext);
  return redirect;
}
