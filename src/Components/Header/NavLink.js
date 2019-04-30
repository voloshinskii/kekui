import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * NavLink component.
 */

export default class NavLink extends Component {
  static propTypes = {
    /** href */
    href: PropTypes.string,
    /** children */
    children: PropTypes.any,
    /** Default React className */
    className: PropTypes.string,
  }
  static defaultProps = {
    className: null,
  }

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
