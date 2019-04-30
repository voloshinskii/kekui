import React, { Component } from 'react';


export default class NavLink extends Component {

  render() {
    return (
      <li>
        <a href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    );
  }
}
