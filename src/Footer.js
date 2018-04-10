import React from 'react';
import ReactGA from 'react-ga';

export default () => (
  <div className="footer">
    <div className="branch">
      <ReactGA.OutboundLink
        eventLabel="out-resume-repo"
        to="https://github.com/fdidron/resume"
        target="_blank">
        ⎇ master
      </ReactGA.OutboundLink>
    </div>
    <div className="madewith">
      Made with <span className="pink">❤</span> using vim and{' '}
      <ReactGA.OutboundLink
        eventLabel="out-after-js-repo"
        to="https://github.com/jaredpalmer/after.js"
        target="_blank">
        after.js
      </ReactGA.OutboundLink>
    </div>
  </div>
);
