import React from 'react';
import {asyncComponent} from '@jaredpalmer/after';
import Loader from './Loader.js';

const PageLoader = () => (
  <div className="page-loader">
    <div>
      <Loader characters="⣾⣽⣻⢿⡿⣟⣯⣷" />
    </div>
  </div>
);

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/Home'),
      Placeholder: () => <PageLoader />,
    }),
  },
  {
    path: '/skills',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/Skills'),
      Placeholder: () => <PageLoader />,
    }),
  },
  {
    path: '/experience',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/Experience'),
      Placeholder: () => <PageLoader />,
    }),
  },
  {
    path: '/form-io-application',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/FormIoApplication'),
      Placeholder: () => <PageLoader />,
    }),
  },
  {
    path: '/contact',
    exact: true,
    component: asyncComponent({
      loader: () => import('./views/Contact'),
      Placeholder: () => <PageLoader />,
    }),
  },
];
