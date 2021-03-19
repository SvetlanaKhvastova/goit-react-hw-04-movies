import { lazy } from 'react';
import links from './nav.json';

const routes = links.map(link => {
  const { id, component, props } = link;
  return {
    exact: props.exact,
    path: props.to,
    component: lazy(() => import(`${component}`)),
    key: id,
  };
});

export default routes;
