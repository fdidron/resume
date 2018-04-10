import React from 'react';
import Menu from './Menu.js';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="page">{this.props.children}</div>
      </div>
    );
  }
}
