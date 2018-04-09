import React from 'react';
import {Formio} from 'react-formio';
import NoSSR from 'react-no-ssr';
import Layout from './Layout.js';
import {formIo} from './config.js';

export default () => (
  <Layout>
    <h1>About</h1>
    <NoSSR>
      <Formio src="https://formiodata.form.io/jobapplication" />
    </NoSSR>
  </Layout>
);
