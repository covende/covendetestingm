import React from 'react';
import { Route } from 'react-router-dom';

// dependencies
import Layout from '../../layouts';

export const HomeConfig = [
  {
    path: '/',
    name: 'Home',
    component: React.lazy(() => import('./')),
    layout: Layout.Home1,
    route: Route,
  },
];
