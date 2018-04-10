import React from 'react';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';
import Command from '../Command.js';
import Footer from '../Footer.js';

const HomeContent = () => (
  <div>
    <p>
      Hi, my name is Florian, CEO and co-founder of a software consultancy [
      <ReactGA.OutboundLink
        eventLabel="out-home-111studio"
        to="https://www.111studio.jp"
        target="_blank">
        111Studio
      </ReactGA.OutboundLink>
      ] based in Tokyo specialized in Node.Js, React and IOT.
    </p>
    <p>
      I have been working as a sofware developer for the past 12+ year including
      7 years of experience managing a business and engineering teams. You can
      read more about my [<Link to="/experience">experience</Link>] and my [<Link to="/skills">
        skills
      </Link>] on this site.
    </p>
    <p>
      As for my devops experience, I have hands-on experience using IAAS such as
      Firebase / Parse or Graph.cool as well as building self hosted
      infrastructures using VMs or Docker clusters on AWS or GCE. Linux has been
      my{' '}
      <ReactGA.OutboundLink
        eventLabel="out-home-imgur"
        to="https://imgur.com/a/Qo3wk"
        target="_blank">
        daily driver
      </ReactGA.OutboundLink>{' '}
      for the past 10 years, I feel very comfortable with anything involving a
      terminal.
    </p>
    <p>
      Git / Gitflow is part of my daily workflow. I have spent quite some time
      improving 111Studio's production flow by enforcing strict coding rules and
      setting up CI/CD pipelines.{' '}
    </p>
    <p>
      On a more personal note, I'm a 36yo French citizen living in Japan since
      2008, married to a Japanese national and proud father of a 3 year old
      daughter. I can speak French (Native), English (Fluent) and Japanese
      (Conversational). I love running, drumming, programming and I'm lucky to
      be living in the beautiful mountains of{' '}
      <ReactGA.OutboundLink
        eventLabel="out-home-karuizawa"
        to="https://www.japan-guide.com/e/e6030.html"
        target="_blank">
        Karuizawa, Nagano
      </ReactGA.OutboundLink>
      .
    </p>
    <Footer />
  </div>
);
export default () => (
  <Command command="cat content/home.md" output={<HomeContent />} />
);
