import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt.js';

export default class Menu extends React.Component {
  static propTypes = {
    command: PropTypes.string.isRequired,
    output: PropTypes.element.isRequired,
  };

  render() {
    const {command, output} = this.props;

    return (
      <div className="command">
        <Prompt />
        <span className="input">{command}</span>
        {output}
      </div>
    );
  }
}
