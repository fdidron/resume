import React from 'react';
import Menu from './Menu.js';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="resume">
        <section className="page">{this.props.children}</section>
      </div>
    );
  }
}

export default Layout;
