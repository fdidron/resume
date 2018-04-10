import React from 'react';
import ReactGA from 'react-ga';
import {hydrate} from 'react-dom';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {ensureReady, After} from '@jaredpalmer/after';
import './Resume.css';
import routes from './routes';
import Layout from './Layout.js';

ReactGA.initialize('UA-117258072-1');

const history = createHistory();

history.listen(location => {
  ReactGA.pageview(location.pathname);
});

ensureReady(routes).then(data => {
  //Send the first page view from the browser
  ReactGA.pageview(history.location.pathname);
  return hydrate(
    <Router history={history}>
      <Layout>
        <After data={data} routes={routes} />
      </Layout>
    </Router>,
    document.getElementById('root'),
  );
});

if (module.hot) {
  module.hot.accept();
}
