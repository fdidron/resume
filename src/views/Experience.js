import React from 'react';
import Command from '../Command.js';
import Footer from '../Footer.js';

const HomeContent = () => (
  <div>
    <p>
      <strong className="green">Co Founder & CTO @ Angels, Inc </strong>
      <span className="text-small">Tokyo - Japan</span>
      <br />
      <span className="text-small blue">Aug 2016 – Present</span>
      <br />
      Investment and technical direction of an Asian crowdfunding platform.
    </p>
    <p>
      <strong className="green">Founder @ 111Studio </strong>
      <span className="text-small">Tokyo - Japan</span>
      <br />
      <span className="text-small blue">May 2011 – Present </span>
      <br />Co-Founded 111Studio K.K, a japanese software development bilding
      custom sofware using a cutting edge technology stack.
    </p>
    <p>
      <strong className="green">
        APAC Program Manager @ McCann Worldgroup
      </strong>
      <span className="text-small"> Tokyo - Japan</span>
      <br />
      <span className="text-small blue">Jan 2013 – Mar 2015 </span>
      <br />Program Management for an APAC wide digital marketing program for
      Google.
    </p>
    <p>
      <strong className="green">Validation Engineer @ Parrot </strong>
      <span className="text-small">Tokyo - Japan</span>
      <br />
      <span className="text-small blue">Nov 2009 – May 2011 </span>
      <br />In charge of software releases for Japanese customers (Bluetooth
      Hardware and Software package for the automotive industry).
    </p>
    <p>
      <strong className="green">Software Designer @ Thales Services </strong>
      <span className="text-small">Bordeaux - France</span>
      <br />
      <span className="text-small blue">Jun 2005 – Nov 2008 </span>
      <br />Software Designer for Orange-FTGroup’s billing software (Printing
      and Web Portal). Responsible of software enhancement studies and
      development.
    </p>
    <p>
      <strong className="green">Level 2 IT Administrator @ Sogeti </strong>
      <span className="text-small">Paris - France</span>
      <br />
      <span className="text-small blue">Feb 2004 – Jun 2005 </span>
      <br />Level 2 IT Administrator for Alcatel Europe & South datacenter
      including system administration (HP-UX / Solaris / Suse / Windows 2003
      Server) as well as software administration (SAP / Lotus Domino /
      WebMethods).
    </p>
    <Footer />
  </div>
);
export default () => (
  <Command command="cat content/experience.md" output={<HomeContent />} />
);
