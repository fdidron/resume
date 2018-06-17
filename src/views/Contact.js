import React from 'react';
import ReactGA from 'react-ga';
import Github from 'react-icons/lib/io/social-github-outline';
import Twitter from 'react-icons/lib/io/social-twitter-outline';
import LinkedIn from 'react-icons/lib/io/social-linkedin-outline';
import Reddit from 'react-icons/lib/io/social-reddit-outline';
import Command from '../Command.js';
import Formio from '../FormioWrapper.js';
import Footer from '../Footer.js';

const SocialContent = () => (
  <div>
    <p>
      You can reach me on the following social networks or use the form belo to
      send me a direct message.
    </p>
    <p>
      <ReactGA.OutboundLink
        eventLabel="out-github-profile"
        to="https://github.com/fdidron"
        target="_blank">
        <Github className="social-icon" /> Github
      </ReactGA.OutboundLink>
    </p>
    <p>
      <ReactGA.OutboundLink
        eventLabel="out-twitter-profile"
        to="https://twitter.com/fdidron"
        target="_blank">
        <Twitter className="social-icon" /> Twitter
      </ReactGA.OutboundLink>
    </p>
    <p>
      <ReactGA.OutboundLink
        eventLabel="out-reddit-profile"
        to="https://www.reddit.com/user/isidith/"
        target="_blank">
        <Reddit className="social-icon" /> Reddit
      </ReactGA.OutboundLink>
    </p>
  </div>
);
const ContactForm = () => (
  <div>
    <Formio
      src="https://qtauhspqfaatbdy.form.io/contact"
      successMessage="Thank you for your interest in my profile, I'll get back to you ASAP."
    />
    <Footer />
  </div>
);

export default () => (
  <div>
    <Command command="./cat content/social.md" output={<SocialContent />} />
    <Command command="./form.sh --contact" output={<ContactForm />} />
  </div>
);
