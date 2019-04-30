import React, { Component } from 'react';


export default class Navbar extends Component {

  render() {
    return (
      <ul className={`navbar ${ this.props.className }`}>
          {this.props.children}
      </ul>
    );
  }
}
