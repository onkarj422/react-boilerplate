import HomePage from './containers/HomePage/Loadable';
import NotFound from './containers/NotFoundPage/Loadable';
import AboutPage from './containers/AboutPage';

export default [
  { path: ['/', '/home'], exact: true, sensitive: true, component: HomePage },
  { path: '/about', sensitive: true, component: AboutPage },
  { component: NotFound },
];
