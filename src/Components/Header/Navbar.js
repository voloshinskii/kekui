import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Navbar component.
 */

export default class Navbar extends Component {
  static propTypes = {
    /** Position */
    position: PropTypes.oneOf(['left', 'right']),
    /** Default React className */
    className: PropTypes.string,
  }
  static defaultProps = {
    position: 'right',
    className: null,
  }

  render() {
    return (
      <ul className={`navbar ${ this.props.className } ${ this.props.position }`}>
          {this.props.children}
      </ul>
    );
  }
}
