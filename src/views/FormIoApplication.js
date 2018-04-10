import React from 'react';
import Command from '../Command.js';
import Formio from '../FormioWrapper.js';

const ContactContent = () => (
  <div>
    <Formio src="https://formiodata.form.io/jobapplication" />
  </div>
);

export default () => (
  <Command
    command="./form.sh --form-io-application"
    output={<ContactContent />}
  />
);
