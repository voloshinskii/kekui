import React, { Component } from 'react';
import PropTypes from 'prop-types'


import Navbar from './Navbar';
import NavLink from './NavLink';

/**
 * Header component.
 */

export default class Header extends Component {
  static propTypes = {
    /** children */
    children: PropTypes.any,
    /** Logo */
    logo: PropTypes.any,
    /** Default React className */
    className: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
  }

  render() {
    return (
      <div className={`header ${this.props.className}`}>
        <input type="checkbox" />
        <span className="logo">
          {this.props.logo}
        </span>
        <div className="span-holder">
          <span></span>
          <span style={{marginBottom:"-22px"}}></span>
          <span></span>
        </div>
        <ul className="header-in">
          {this.props.children}
        </ul>
      </div>
    );
  }
}
