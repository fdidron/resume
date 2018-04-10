import React from 'react';
import Command from '../Command.js';
import Formio from '../FormioWrapper.js';

const ContactContent = () => (
  <Formio src="https://formiodata.form.io/jobapplication" />
);

export default () => (
  <Command
    command="./form.sh --form-io-application"
    output={<ContactContent />}
  />
);
