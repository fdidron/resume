import React from 'react';
import {NavLink} from 'react-router-dom';
import Typist from 'react-typist';
import Prompt from './Prompt.js';
import {cursor} from './config.js';

export default class Menu extends React.Component {
  state = {
    displayLinks: false,
  };

  handleCommandCompletion = () => {
    this.setState({displayLinks: true});
  };

  render() {
    const Links =
      this.state.displayLinks === true ? (
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <span className="separator" />
          <NavLink to="/about">About</NavLink>
          <span className="separator" />
          <NavLink to="/skills">Skills</NavLink>
          <span className="separator" />
          <NavLink to="/experience">Experience</NavLink>
          <span className="separator" />
          <NavLink to="/contact">Contact</NavLink>
        </div>
      ) : null;
    return (
      <div className="menu">
        <Prompt />
        <Typist
          className="command"
          cursor={cursor}
          onTypingDone={this.handleCommandCompletion}>
          cat menu.md
        </Typist>
        {Links}
      </div>
    );
  }
}
