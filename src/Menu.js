import React from 'react';
import {NavLink} from 'react-router-dom';
import Command from './Command.js';

export default class Menu extends React.Component {
  render() {
    const Links = (
      <div className="links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <span className="separator" />
        <NavLink to="/skills">Skills</NavLink>
        <span className="separator" />
        <NavLink to="/experience">Experience</NavLink>
        <span className="separator" />
        <NavLink to="/contact">Contact</NavLink>
      </div>
    );
    return <Command command="cat menu.md" output={Links} />;
  }
}
